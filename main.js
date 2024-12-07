const {app, BrowserWindow, path} = require('electron');
setTimeout(()=>{
    console.warn(app.isReady())
},3000)
function createWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            //frame: false,// this will remove the title bar
            backgroundColor: '#000000',
            alwaysOnTop: false, // this will make the window always on top every new process will open in background
            title: 'sahil',
            resizable: false,// this will make the window unresizable
            webPreferences: {
                nodeIntegration: true,
            }
        });
        win.loadFile('index.html');
        // win.webContents.openDevTools();
        // let child = new BrowserWindow({parent: win});
        // child.loadFile('childd.html');
        // child.show();
    
    }
    app.on('ready',()=>{
        createWindow();

        console.warn("app is ready")
    })
    
    app.whenReady().then(createWindow)


