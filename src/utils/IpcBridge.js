export default {
  send(channel, arg) {
    return new Promise((resolve, reject) => {
      if (typeof window.ipcRenderer == 'undefined') {
        console.log('IpcBridge.send channel', arg)
        resolve('development')
        return
      }

      try {
        window.ipcRenderer.send(channel, arg)

        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  },

  sendSync(channel, arg) {
    return new Promise((resolve, reject) => {
      if (typeof window.ipcRenderer == 'undefined') {
        console.log('IpcBridge.sendSync channel', arg)

        resolve('development')
        return
      }

      try {
        let res = window.ipcRenderer.sendSync(channel, arg)

        resolve(res)
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  },

  receive(channel, func) {
    return new Promise((resolve, reject) => {
      if (typeof window.ipcRenderer == 'undefined') {
        console.log('IpcBridge.receive channel', func)

        resolve('development')
        return
      }

      try {
        window.ipcRenderer.receive(channel, func)
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }
}
