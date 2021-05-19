import { contextBridge, ipcRenderer } from 'electron'

// https://stackoverflow.com/questions/55164360/with-contextisolation-true-is-it-possible-to-use-ipcrenderer/59675116#59675116
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    console.log(`ipcRenderer send channel: ${channel} ;`, data)
    // whitelist channels
    let validChannels = [
      'toMain',
      'win:minimize',
      'win:maximize',
      'win:unmaximize',
      'win:restore',
      'win:close'
    ]
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    console.log(`ipcRenderer receive channel: ${channel} ;`, func)
    let validChannels = ['fromMain', 'win:isMaximized']
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }
})

// window.ipcRenderer.receive('fromMain', data => {
//   console.log(`Received ${data} from main process`)
// })
// window.ipcRenderer.send('win:minimize')
