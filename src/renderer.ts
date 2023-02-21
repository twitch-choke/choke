import { contextBridge, ipcRenderer } from "electron/renderer";

const ipc: { render: { [key: string]: string[] } } = {
	render: {
		send: [ 'start', 'login', 'page' ],
		receive: [ 'error' ],
		sendReceive: []
	}
};

contextBridge.exposeInMainWorld(
	'ipcRenderer', {
		send: (channel: string, args: any) => {
			const validChannels = ipc.render.send;
			if (validChannels.includes(channel)) {
				ipcRenderer.send(channel, args);
			} else throw new Error(`You are not allowed to use channel '${channel}'`);
		},
		receive: (channel: string, listener: any) => {
			const validChannels = ipc.render.receive;
			if (validChannels.includes(channel)) {
				ipcRenderer.on(channel, (_event, ...args) => listener(...args));
				// ipcRenderer.addListener(channel, (...args) => listener(...args));
			} else throw new Error(`You are not allowed to use channel '${channel}'`);
		},
		invoke: (channel: string, args: any) => {
			const validChannels = ipc.render.sendReceive;
			if (validChannels.includes(channel)) {
				return ipcRenderer.invoke(channel, args);
			} else throw new Error(`You are not allowed to use channel '${channel}'`);
		}
	},
);