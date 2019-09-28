import OrgdownModule from '../module'
import { fromEvent } from 'rxjs';
import { BrowserWindow } from 'electron';

export default class OrgdownUiModule extends OrgdownModule {

    currentWindow: BrowserWindow

    getName(): string {
        return 'ui';
    }

    registe(): OrgdownModule {
        fromEvent(this.eventBus, 'orgdown.user:auth-success').subscribe(this.loadNotebookWindow)
        fromEvent(this.eventBus, 'orgdown.user:auth-required').subscribe(this.loadAuthWindow)
        return this;
    }

    loadAuthWindow() {
        let win = new BrowserWindow({
            title: 'oRgdown',
            width: 1400,
            height: 1000,
            webPreferences: {
                nodeIntegration: true
            }
        })

        // 加载index.html文件
        win.loadURL('http://baidu.com')
        this.currentWindow = win;
        this.currentWindow.show()
    }

    loadNotebookWindow() {
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
        this.currentWindow = win;
        this.currentWindow.show()
    }

}