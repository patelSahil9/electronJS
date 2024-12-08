const { app, BrowserWindow, dialog, globalShortcut, Tray } = require('electron');
const path = require('path'); // Required for resolving file paths

let tray = null; // Declare tray at a higher scope to prevent garbage collection

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // If needed for your app
        },
    });

    win.loadFile('index.html');

    // Initialize Tray
    const iconPath = path.join(__dirname, 'electron.png'); // Ensure the file path is correct
    tray = new Tray(iconPath);

    tray.setToolTip('My Electron App'); // Set tooltip text for the tray icon
    tray.on('click', () => {
        console.log('Tray icon clicked!');
        win.isVisible() ? win.hide() : win.show(); // Toggle window visibility on click
    });

    }

    // Handle window's `did-finish-load` event
    win.webContents.on('did-finish-load', () => {
        console.log('Window finished loading');
    });


app.whenReady().then(createWindow);

