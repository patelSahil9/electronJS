const {app,BrowserWindow,dialog, globalShortcut,Tray} = require('electron');
let Tray=null;
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile('index.html');
   
    }
    globalShortcut.register('k', () => {
        dialog.showOpenDialog({
            defaultPath:app.getPath('desktop'),
            buttonLabel:'select File',
                
    })
    win.webContents.on('did-finish-load', () => {
// dialog.showOpenDialog({
//     defaultPath:app.getPath('desktop'),
//     buttonLabel:'select File',
// });
    });
    })


app.whenReady().then(createWindow);