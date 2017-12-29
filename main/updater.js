'use strict'

const { app, autoUpdater } = require('electron')
const isDev = require('electron-is-dev')

module.exports = () => {
  if (!isDev) {
    const server = 'https://taskr.now.sh'
    const feed = `${server}/update/${process.platform}/${app.getVersion()}`

    autoUpdater.setFeedURL(feed)

    return autoUpdater.getFeedURL()
  }
}
