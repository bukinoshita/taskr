'use strict'

// Packages
const { writeJSON } = require('fs-extra')
const { remote } = require('electron')

// Services
const { getUser } = require('./api')

export const exportUser = () => {
  remote.dialog.showSaveDialog(
    undefined,
    { defaultPath: '~/taskr.json' },
    fileName => {
      if (fileName) {
        const user = getUser()

        writeJSON(fileName, user).catch(err => console.log(err))
      }
    }
  )
}
