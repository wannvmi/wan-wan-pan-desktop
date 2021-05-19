'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let mainWindow

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      contextIsolation: true,
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html')
  }

  mainWindow.on('maximize', (event) => {
    let isMaximized = mainWindow.isMaximized()
    event.sender.send('win:isMaximized', isMaximized)
  })

  mainWindow.on('unmaximize', (event) => {
    let isMaximized = mainWindow.isMaximized()
    event.sender.send('win:isMaximized', isMaximized)
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// ipcMain.on('toMain', (event, data) => {
//   // find other window to send the event to
//   console.log('触发了')
// })

// ipcMain.on('toMain', (event, data) => {
//   // find other window to send the event to
//   console.log('触发了')
//   event.sender.send('fromMain', data)
//   event.reply('fromMain', data)
// })

// https://www.electronjs.org/docs/api/ipc-main
ipcMain.on('win:minimize', event => {
  if (mainWindow) {
    mainWindow.minimize()

    event.returnValue = new Error('mainWindow not exist')
  } else {
    event.returnValue = new Error('mainWindow not exist')
  }
})

ipcMain.on('win:maximize', event => {
  if (mainWindow) {
    mainWindow.maximize()

    let isMaximized = mainWindow.isMaximized()

    event.returnValue = isMaximized
  } else {
    event.returnValue = new Error('mainWindow not exist')
  }
})

ipcMain.on('win:unmaximize', event => {
  if (mainWindow) {
    mainWindow.unmaximize()

    let isMaximized = mainWindow.isMaximized()

    event.returnValue = isMaximized
  } else {
    event.returnValue = new Error('mainWindow not exist')
  }
})

ipcMain.on('win:restore', event => {
  if (mainWindow) {
    mainWindow.restore()

    event.returnValue = true
  } else {
    event.returnValue = new Error('mainWindow not exist')
  }
})

ipcMain.on('win:close', event => {
  if (mainWindow) {
    mainWindow.close()
    mainWindow.destroy()

    event.returnValue = true
  } else {
    event.returnValue = new Error('mainWindow not exist')
  }
})
