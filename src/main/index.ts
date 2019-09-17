const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
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
