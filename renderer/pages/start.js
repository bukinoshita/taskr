'use strict'

// Packages
import { remote } from 'electron'
import { Component } from 'react'
import Router from 'next/router'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'

// Services
import { getCookie } from './../services/cookies'
import { getUser, updateUser } from './../services/local-storage'

// Theme
import { colors, typography } from './../theme'

class Start extends Component {
  componentDidMount() {
    const { user } = getUser()
    const cfg = remote && remote.app ? remote.app.config : {}
    const token = getCookie('taskr')
    const { pro } = cfg.user
    const skipOnboard = user.onboard ? '/home?tab=Today' : '/onboard'
    const redirectUrl = pro && token ? '/home?tab=Today' : skipOnboard

    if (!user.onboard) {
      const userUpdated = Object.assign(user, { onboard: true })

      updateUser(userUpdated)
    }

    Router.push(redirectUrl)
  }

  render() {
    return (
      <Page>
        <Row>
          <section>
            <div>
              <svg width="70" height="70" viewBox="0 0 256 256">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g>
                    <rect
                      fill={colors.black}
                      x="0"
                      y="0"
                      width="256"
                      height="256"
                      rx="50"
                    />
                    <polyline
                      stroke={colors.white}
                      strokeWidth="16.8000007"
                      points="66 133.441579 94.6517837 167.708376 189.594753 88"
                    />
                  </g>
                </g>
              </svg>

              <h1>Taskr</h1>
              <h2>A simple task manager app</h2>
            </div>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 580px;
            padding-bottom: 50px;
          }

          div {
            width: 100%;
          }

          h1 {
            margin-top: 30px;
            color: ${colors.white};
            font-size: ${typography.f40};
            font-weight: ${typography.medium};
          }

          h2 {
            color: ${colors.romanSilver};
            font-size: ${typography.f20};
            margin-top: 10px;
            font-weight: ${typography.regular};
          }
        `}</style>
      </Page>
    )
  }
}

export default Start
