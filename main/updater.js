'use strict'

// Packages
const { app, autoUpdater } = require('electron')
const isDev = require('electron-is-dev')

// Utils
const notify = require('./notify')

module.exports = () => {
  if (!isDev) {
    const server = 'https://taskr.now.sh'
    const feed = `${server}/update/${process.platform}/${app.getVersion()}`

    autoUpdater.setFeedURL(feed)

    autoUpdater.on('update-downloaded', () => {
      autoUpdater.quitAndInstall()
      app.quit()
    })

    autoUpdater.on('update-available', () => {
      notify({
        title: 'New update available',
        body: 'Found update for the app! Downloading...'
      })
    })
    
    autoUpdater.on('error', () => {
      notify({
        title: 'Update failed',
        body: 'Unable to reach update server'
      })
    })

    return autoUpdater.checkForUpdates()
  }
}
