const { ipcMain, app, BrowserWindow } = require('electron');
const { handleVideoFile, handleAudioFile } = require("./handlers/copyHandlers");
const { handleReadVideo, handleReadAudio } = require("./handlers/readHandlers");
const { handleDelVideo, handleDelAudio } = require("./handlers/delHandlers");
const { handleRenameVideo, handleRenameAudio } = require("./handlers/renameHandlers");
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    minHeight: 600,
    minWidth: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile('./dist/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    };
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

//copy
ipcMain.handle("copyVideoFile", handleVideoFile);
ipcMain.handle("copyAudioFile", handleAudioFile);

//read
ipcMain.handle("readVideoDir", handleReadVideo);
ipcMain.handle("readAudioDir", handleReadAudio);

//del
ipcMain.handle("delVideoFile", handleDelVideo);
ipcMain.handle("delAudioFile", handleDelAudio);

//rename
ipcMain.handle("renameVideoFile", handleRenameVideo);
ipcMain.handle("renameAudioFile", handleRenameAudio);