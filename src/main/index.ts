import { app, BrowserWindow } from 'electron';
import { fromEvent } from 'rxjs';

import OrgdownApplication from './orgdown';

import config from '@orgdown/config';

let orgdown = new OrgdownApplication(config)

fromEvent(app, 'ready')
  .subscribe(() => {
    orgdown.emit('orgdown.app:start')
  })


// app.setName('Orgdown');

// fromEvent(app, 'ready')
//   .subscribe(() => createWindow());


// const dataPath = app.getPath('userData');

// RxDB.plugin(require('pouchdb-adapter-leveldb'));
// RxDB.plugin(require('pouchdb-adapter-http'));

// const leveldown = require('leveldown');

// const noteSchema = {
//   "title": "hero schema",
//   "version": 0,
//   "description": "describes a simple hero",
//   "type": "object",
//   "properties": {
//     "title": {
//       "type": "string",
//       "primary": true
//     },
//     "content": {
//       "type": "string"
//     },
//   }
// }

// async function createWindow() {
//   const db = await RxDB.create({
//     name: `${dataPath}/data/orgdown`,
//     adapter: leveldown
//   });

//   const collection = await db.collection({
//     name: 'notes',
//     schema: noteSchema
//   });

//   const replicationState = collection.sync({
//     remote: 'http://150.95.186.169:5984/orgdown/', // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
//     waitForLeadership: true,              // (optional) [default=true] to save performance, the sync starts on leader-instance only
//     direction: {                          // direction (optional) to specify sync-directions
//       pull: true, // default=true
//       push: true  // default=true
//     },
//     options: {                             // sync-options (optional) from https://pouchdb.com/api.html#replication
//       live: true,
//       retry: true
//     }
//   });

//   replicationState.change$.subscribe(change => console.dir(change));


// }