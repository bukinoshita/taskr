'use strict'

const HOME_DIR = require('os').homedir()

// Packages
const { remote } = require('electron')
const { writeJSON, readJson } = require('fs-extra')

// Services
const { getUser, updateUser } = require('./api')
const notify = require('./notify')

export const exportUser = () => {
  remote.dialog.showSaveDialog(
    undefined,
    { defaultPath: `${HOME_DIR}/taskr.json` },
    fileName => {
      if (fileName) {
        const user = getUser()

        writeJSON(fileName, user)
          .then(() =>
            notify({
              title: 'User config exported!',
              body: 'Your user config was exported successfully'
            })
          )
          .catch(err => {
            console.log(err)
            return notify({
              title: 'Error!',
              body: 'Oops, something happened! Please, try again.'
            })
          })
      }
    }
  )
}

export const importUser = () => {
  remote.dialog.showOpenDialog(
    undefined,
    { properties: ['openFile'] },
    filePath => {
      readJson(filePath[0])
        .then(({ user }) => {
          if (user) {
            return updateUser(user)
          }
        })
        .then(() =>
          notify({
            title: 'User config imported!',
            body: 'Your user config was imported successfully'
          })
        )
        .catch(err => {
          console.log(err)
          return notify({
            title: 'Error!',
            body: 'Oops, something happened! Please, try again.'
          })
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
