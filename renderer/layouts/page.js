'use strict'

// Native
import { platform } from 'os'

// Packages
import { Component } from 'react'
import Router from 'next/router'

// Components
import WinControls from '../components/win-controls'

// Theme
import { colors, typography } from './../theme'

class Page extends Component {
  constructor() {
    super()

    this.handleKeypress = this.handleKeypress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress, true)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress, true)
  }

  handleKeypress(event) {
    if (event.keyCode === 27) {
      return Router.push({
        pathname: '/home',
        query: { tab: 'Today' }
      })
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 78) {
      return Router.push('/add')
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 49) {
      return Router.push({
        pathname: '/home',
        query: { tab: 'Today' }
      })
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 50) {
      return Router.push({
        pathname: '/home',
        query: { tab: 'Backlog' }
      })
    }

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 51) {
      return Router.push({
        pathname: '/home',
        query: { tab: 'Done' }
      })
    }
  }

  render() {
    const { children } = this.props
    const bgColor = colors ? colors.black : colors.black
    const fontSizeBase = typography
      ? typography.fontSizeBase
      : typography.fontSizeBase

    return (
      <main>
        {platform() === 'win32' ? <WinControls /> : null}

        {children}

        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }

          html {
            -webkit-app-region: ${platform() === 'win32' ? 'inherit' : 'drag'};
          }

          body {
            background-color: ${bgColor};
            max-height: 550px;
            overflow: hidden;
          }

          body,
          html {
            font-size: ${fontSizeBase};
          }

          a {
            text-decoration: none;
          }

          li {
            list-style: none;
          }

          img {
            max-width: 100%;
          }

          fieldset {
            border: 0;
          }
        `}</style>
      </main>
    )
  }
}

export default Page
