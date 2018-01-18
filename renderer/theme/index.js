'use strict'

// Utils
import { applyTheme, applyFontSize } from './utils'

export const colors = {
  white: applyTheme('white'),
  black: applyTheme('black'),
  romanSilver: applyTheme('romanSilver'),
  darkMediumGray: applyTheme('darkMediumGray'),
  brightTurquoise: applyTheme('brightTurquoise')
}

export const typography = {
  fontSizeBase: applyFontSize(),
  f8: '.5rem',
  f10: '.6rem',
  f12: '.75rem',
  f14: '.85rem',
  f16: '1rem',
  f18: '1.15rem',
  f20: '1.25rem',
  f22: '1.35rem',
  f24: '1.5rem',
  f26: '1.75rem',
  f30: '1.9rem',
  f32: '2rem',
  f35: '2.2rem',
  f45: '2.8rem',
  f56: '3.5rem',
  ultralight: 100,
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900
}
