﻿import {BrowserWindow} from 'electron';
import {app} from 'electron';

class ElectronApplication {
    mainWindow: Electron.BrowserWindow = null;

    constructor(public app: Electron.App) {
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }

    protected onWindowAllClosed() {
        if (process.platform != 'darwin') {
            this.app.quit();
        }
    }

    protected onReady() {
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden',
        });

        this.mainWindow.loadURL('file://' + __dirname + '/index.html');

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }

}

const myApp = new ElectronApplication(app);
