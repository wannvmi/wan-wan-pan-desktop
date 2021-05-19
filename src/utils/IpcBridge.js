export default {
  send(channel, arg) {
    return new Promise((resolve, reject) => {
      if (window.ipcRenderer == null) {
        resolve('development')
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
      if (window.ipcRenderer == null) {
        resolve('development')
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
      if (window.ipcRenderer == null) {
        resolve('development')
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
