import RxDB from 'rxdb';
import { app, BrowserWindow } from 'electron';

app.setName('Orgdown');


const dataPath = app.getPath('userData')

RxDB.plugin(require('pouchdb-adapter-leveldb'));
const leveldown = require('leveldown');

const db = RxDB.create({
  name: `${dataPath}/data/orgdown`,
  adapter: leveldown
});

function createWindow() {
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

app.on('ready', createWindow)
