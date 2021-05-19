export default {
  ipcRendererSend(channel, data) {
    return new Promise((resolve, reject) => {
      if (window.ipcRenderer == null) {
        resolve('development')
      }

      try {
        window.ipcRenderer.send(channel, data)
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }
}
