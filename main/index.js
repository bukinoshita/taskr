
'use strict'

// Native
const { format } = require('url')
const { join } = require('path')
const { platform } = require('os')

// Packages
const { BrowserWindow, app, Menu } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

// Utils
const autoUpdater = require('./updater')

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')
  const mainWindow = new BrowserWindow({
        width: 320,
        height: 580,
        minWidth: 320,
        minHeight: 580,
        resizable: true,
        backgroundColor: '#000000',
        frame: platform() !== 'win32',
        titleBarStyle: 'hiddenInset',
        icon: platform() === 'win32' ? join(__dirname, 'main/static/icon.ico') : join(__dirname, 'main/static/icon.icns')
      })

  const devPath = 'http://localhost:8000/start'

  const prodPath = format({
    pathname: resolve('renderer/out/start/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const template = [
    {
      label: 'Application',
      submenu: [
        {
          label: 'About Application',
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          selector: 'selectAll:'
        }
      ]
    }
  ]

  if (platform() !== 'win32'){
    autoUpdater()
  }
  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
