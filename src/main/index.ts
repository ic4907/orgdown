import RxDB from 'rxdb';
import { app, BrowserWindow } from 'electron';
import { fromEvent } from 'rxjs';

app.setName('Orgdown');

fromEvent(app, 'ready')
  .subscribe(() => createWindow());


const dataPath = app.getPath('userData');

RxDB.plugin(require('pouchdb-adapter-leveldb'));
RxDB.plugin(require('pouchdb-adapter-http'));

const leveldown = require('leveldown');

const noteSchema = {
  "title": "hero schema",
  "version": 0,
  "description": "describes a simple hero",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "primary": true
    },
    "content": {
      "type": "string"
    },
  }
}

async function createWindow() {
  const db = await RxDB.create({
    name: `${dataPath}/data/orgdown`,
    adapter: leveldown
  });

  const collection = await db.collection({
    name: 'notes',
    schema: noteSchema
  });

  const replicationState = collection.sync({
    remote: 'http://150.95.186.169:5984/orgdown/', // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
    waitForLeadership: true,              // (optional) [default=true] to save performance, the sync starts on leader-instance only
    direction: {                          // direction (optional) to specify sync-directions
      pull: true, // default=true
      push: true  // default=true
    },
    options: {                             // sync-options (optional) from https://pouchdb.com/api.html#replication
      live: true,
      retry: true
    }
  });

  replicationState.change$.subscribe(change => console.dir(change));

  const notes = collection.notes;

  console.log(notes);

  // notes.$.subscribe(changeEvent => console.dir('notes has changed', changeEvent));


  // 创建浏览器窗口
  let win = new BrowserWindow({
    title: 'oRgdown',
    width: 1400,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const url = process.env.NODE_ENV == 'development' ? `http://localhost:8080` : `file://${__dirname}/index.html`

  // 加载index.html文件
  win.loadURL(url)
}