'use strict'

const { homedir } = require('os')
const { join } = require('path')

const { readJSON, writeJSON } = require('fs-extra')
const pathExists = require('path-exists')

const paths = {
  config: '.taskr.json',
  theming: '.taskr-theme.json'
}

for (const file in paths) {
  if (!{}.hasOwnProperty.call(paths, file)) {
    continue
  }

  paths[file] = join(homedir(), paths[file])
}

const hasConfig = async () => {
  const configExists = await pathExists(paths.config)

  return configExists
}

const hasTheming = async () => {
  const themingExists = await pathExists(paths.theming)

  return themingExists
}

const createConfig = async () => {
  const cfg = {
    pro: false,
    lastUpdate: new Date()
  }

  await writeJSON(paths.config, cfg, {
    spaces: 2
  })
}

const createTheming = async () => {
  const theming = {
    white: '#ffffff',
    black: '#000000',
    romanSilver: '#868e96',
    darkMediumGray: '#aaaaaa',
    brightTurquoise: '00e7c0',
    fontSizeBase: '16px'
  }

  await writeJSON(paths.theming, theming, {
    spaces: 2
  })
}

exports.getConfig = async () => {
  if (!await hasConfig() && !await hasTheming()) {
    await createConfig()
    await createTheming()

    const user = await readJSON(paths.config)
    const theme = await readJSON(paths.theming)

    return { user, theme }
  }

  const user = await readJSON(paths.config)
  const theme = await readJSON(paths.theming)

  return { user, theme }
}
