'use strict'

import WinControls from '../components/win-controls'

// Theme
import { colors } from './../theme'

const { platform } = require('os')

const Page = ({ children }) => {
  return (
    <main>
      {platform() === 'win32' ? (
        <WinControls />
      ) : (
        <style global>
          {`
            html {
              -webkit-app-region: drag;
            }
          `}
        </style>
      )}
      {children}

      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        body {
          background-color: ${colors.black};
          max-height: 550px;
          overflow: hidden;
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

export default Page
