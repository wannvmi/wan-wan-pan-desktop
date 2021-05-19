import store from '@/store'

function receive() {
  window.ipcRenderer.receive('fromMain', data => {
    console.log(`Received ${data} from main process`)
  })

  window.ipcRenderer.receive('win:isMaximized', data => {
    console.log(`Received ${data} from main process`)
    console.log(store)
    store.dispatch('settings/changeIsMaxWindow', data)
  })
}

if (window.ipcRenderer != null) {
  receive()
}
