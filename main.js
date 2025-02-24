const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log('Electron app starting...');

let mainWindow;

app.on('ready', () => {
  console.log('App is ready!');
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: false, // Keep transparency disabled for now
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the overlay UI from the dist folder
  mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));

  // Open DevTools automatically (for debugging)
  mainWindow.webContents.openDevTools();
});