import { contextBridge, ipcRenderer } from 'electron'

const sendChannels = [
  'toMain',
  'win:minimize',
  'win:maximize',
  'win:unmaximize',
  'win:restore',
  'win:close'
]

const receiveChannels = ['fromMain', 'win:isMaximized']

// https://stackoverflow.com/questions/55164360/with-contextisolation-true-is-it-possible-to-use-ipcrenderer/59675116#59675116
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, arg) => {
    console.log(`ipcRenderer send channel: ${channel} ;`, arg)
    // whitelist channels
    if (sendChannels.includes(channel)) {
      ipcRenderer.send(channel, arg)
    } else {
      throw new Error('sendChannels not include')
    }
  },
  sendSync: (channel, arg) => {
    console.log(`ipcRenderer sendSync channel: ${channel} ;`, arg)
    // whitelist channels
    if (sendChannels.includes(channel)) {
      let res = ipcRenderer.sendSync(channel, arg)
      return res
    } else {
      throw new Error('sendChannels not include')
    }
  },
  receive: (channel, func) => {
    console.log(`ipcRenderer receive channel: ${channel} ;`, func)
    if (receiveChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    } else {
      throw new Error('sendChannels not include')
    }
  }
})

// window.ipcRenderer.receive('fromMain', data => {
//   console.log(`Received ${data} from main process`)
// })
// window.ipcRenderer.send('win:minimize')
