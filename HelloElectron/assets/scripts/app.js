var electron_1 = require('electron');
var electron_2 = require('electron');
var ElectronApplication = (function () {
    function ElectronApplication(app) {
        this.app = app;
        this.mainWindow = null;
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }
    ElectronApplication.prototype.onWindowAllClosed = function () {
        if (process.platform != 'darwin') {
            this.app.quit();
        }
    };
    ElectronApplication.prototype.onReady = function () {
        var _this = this;
        this.mainWindow = new electron_1.BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden',
        });
        this.mainWindow.loadURL('file://' + __dirname + '/index.html');
        this.mainWindow.on('closed', function () {
            _this.mainWindow = null;
        });
    };
    return ElectronApplication;
})();
var myApp = new ElectronApplication(electron_2.app);
//# sourceMappingURL=app.js.map