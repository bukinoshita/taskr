
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
  let mainWindow
  switch (platform()) {
    case 'win32':
      mainWindow = new BrowserWindow({
        width: 320,
        height: 580,
        resizable: false,
        frame: false,
        icon: join(__dirname, 'main/static/icon.ico')
      })
      break;
  
    default:
      mainWindow = new BrowserWindow({
        width: 320,
        height: 580,
        resizable: false,
        titleBarStyle: 'hiddenInset',
        icon: join(__dirname, 'main/static/icon.icns')
      })
      break;
  }

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

  autoUpdater()

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
