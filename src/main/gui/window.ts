import { BrowserWindow } from 'electron';

export function createMainOrgdownWindow(config: any) {
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
    return win;
}