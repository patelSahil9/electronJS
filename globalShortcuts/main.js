const {app, BrowserWindow,globalShortcut} = require('electron');

//globle shortcut is used as hotkey to open new window it can be use even the page is in bacground

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'sahil',
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.loadFile('index.html');
    globalShortcut.register('k', () => {
        win.loadFile('second.html');
    })
}

console.warn(app.isReady())

app.on('ready', ()=>{
    createWindow();
    console.warn("app is ready you can write any code here")
});