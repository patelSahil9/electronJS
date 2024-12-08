const {app, BrowserWindow, path} = require('electron');
const windowStateKeeper = require('electron-window-state');
// setTimeout(()=>{
//     console.warn(app.isReady())
// },3000)
let win;

console.warn(app.isReady())
function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 800,
        defaultHeight: 600
    })
        const win = new BrowserWindow({
            x: mainWindowState.x,
            y: mainWindowState.y,
            width: mainWindowState.width,
            height: mainWindowState.height,
            frame: false,// this will remove the title bar
            backgroundColor: '#000000',
            alwaysOnTop: false, // this will make the window always on top every new process will open in background
            title: 'sahil',
            resizable: false,// this will make the window unresizable
            webPreferences: {
                nodeIntegration: true, // nodeintegration will allow us to use nodejs in our website
            }
        });
        win.loadFile('index.html');
        // win.loadFile('another/index.html');
        mainWindowState.manage(win);
        // win.webContents.openDevTools(); // this will open the dev tools like inspact in website
        // let child = new BrowserWindow({parent: win});
        // child.loadFile('childd.html');
        // child.show();


        //webContents events are fired when the page is loaded
        let wc=win.webContents;
        wc.on('dom-ready', () => {
            console.warn("dom ready")
        });
        wc.on('did-finish-load', () => {
            console.warn("did finish load")
        });
        wc.on('new-window', () => {
            console.warn("new window")
        });
        wc.on('before-input-event',()=>{
            console.warn("any key is pressed ")
        });
    }
    app.on('before-quit',(e)=>{
        console.warn("before quit")
        e.preventDefault();
    })
    app.on('browser-window-blur', (event, window) => {
        console.log('Window blurred');
    });
    
    app.on('ready',()=>{
        createWindow();
        console.warn("app is ready")
    })
    
    
    
    app.whenReady().then(createWindow)


