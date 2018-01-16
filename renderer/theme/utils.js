'use strict'

// Packages
import electron from 'electron'

const app = process.type === 'renderer' ? electron.remote.app : electron.app

const baseColor = {
  white: '#ffffff',
  black: '#000000',
  romanSilver: '#868e96',
  darkMediumGray: '#aaaaaa',
  brightTurquoise: '#00e7c0'
}

const baseFont = {
  fontSizeBase: '16px'
}

export const applyTheme = color => {
  const themeColor =
    app && app.config ? app.config.theme[color] : baseColor[color]

  return themeColor
}

export const applyFontSize = () => {
  const baseFontSize =
    app && app.config ? app.config.theme.fontSizeBase : baseFont.fontSizeBase

  return baseFontSize
}
