'use strict'

// Packages
import Router from 'next/router'

const backToHome = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  Router.push('/start')

  event.preventDefault()
}

const Page = ({ children }) => {
  return (
    <main onDoubleClick={backToHome}>
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

        html {
          -webkit-app-region: drag;
        }

        body {
          background-color: #000;
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
