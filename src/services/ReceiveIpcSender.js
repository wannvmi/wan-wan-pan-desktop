import store from '@/store'
import IpcBridge from '../utils/IpcBridge'

IpcBridge.receive('fromMain', data => {
  console.log(`fromMain Received ${data} from main process`)
})

IpcBridge.receive('win:isMaximized', data => {
  console.log(`win:isMaximized Received ${data} from main process`)
  store.dispatch('settings/changeIsMaxWindow', data)
})
