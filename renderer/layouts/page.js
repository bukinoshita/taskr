'use strict'

// Native
import { platform } from 'os'

// Packages
import { Component } from 'react'
import Router from 'next/router'
import Progress from 'nprogress'

// Components
import WinControls from '../components/win-controls'

// Theme
import { colors, typography } from './../theme'

let progress
const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

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

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${colors.white};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${colors.white}, 0 0 5px ${colors.white};
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}</style>
      </main>
    )
  }
}

export default Page
