import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
	const win = new BrowserWindow({
		width: 1660,
		height: 1000,
		minWidth: 1660,
		minHeight: 1000,
		webPreferences: {
			preload: path.join(__dirname, 'renderer.js'),
		},

		// resizable: false,
		fullscreen: false,
		fullscreenable: false,
		// minimizable: false,
		titleBarStyle: 'hidden',
		frame: false
	});

	win.loadFile(path.join(__dirname, '..', 'index.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});