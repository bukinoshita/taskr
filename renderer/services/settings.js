'use strict'

// Packages
const { remote } = require('electron')
const { writeJSON, readJson } = require('fs-extra')

// Services
const { getUser, updateUser } = require('./api')

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

export const importUser = () => {
  remote.dialog.showOpenDialog(
    undefined,
    { properties: ['openFile'] },
    filePath => {
      readJson(filePath[0]).then(({ user }) => {
        if (user) {
          return updateUser(user)
        }
      })
    }
  )
}

export const clearHistory = () => {
  const user = {
    tasks: []
  }

  updateUser(user)
}
