'use strict'

// Packages
import { remote, shell } from 'electron'
import { Component } from 'react'
import Link from 'next/link'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Hero from './../components/hero'

// Sertvices
import { getUser, updateUser } from './../services/api'
import { exportUser, importUser, clearHistory } from './../services/settings'

// Theme
import { colors } from './../theme'

class Settings extends Component {
  constructor() {
    super()

    this.openUrl = this.openUrl.bind(this)
    this.onClearHistory = this.onClearHistory.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)

    this.state = { defaultOption: 'Today' }
  }

  componentDidMount() {
    const { user } = getUser()
    const { createOn } = user

    this.setState({ defaultOption: createOn })
  }

  openUrl(url) {
    shell.openExternal(url)
  }

  onClearHistory() {
    const choice = remote.dialog.showMessageBox(remote.getCurrentWindow(), {
      type: 'question',
      buttons: ['Yes', 'No'],
      title: 'Confirm',
      message: 'Are you sure you want to clear your history?'
    })

    if (choice === 0) {
      return clearHistory()
    }
  }

  onSelectChange(event) {
    const { target } = event
    const { value } = target
    const { user } = getUser()

    user.createOn = value

    this.setState({ defaultOption: value })
    updateUser(user)
  }

  render() {
    const appVersion = remote && remote.app ? remote.app.getVersion() : ''
    const { defaultOption } = this.state

    return (
      <Page>
        <Row>
          <section>
            <Hero type="Settings" />

            <ul>
              <li className="has-select">
                Create tasks on
                <div className="select">
                  <select onChange={this.onSelectChange} value={defaultOption}>
                    <option value="Today">Today</option>
                    <option value="Backlog">Backlog</option>
                  </select>
                </div>
              </li>

              <li onClick={importUser}>Import tasks</li>
              <li onClick={exportUser}>Export tasks</li>
              <li onClick={this.onClearHistory}>Clear history</li>
              <li>
                Cloud sync <span>soon</span>
              </li>
              <li>
                Create team <span>soon</span>
              </li>
            </ul>

            <footer>
              <Link href="/start" prefetch>
                <span>Back</span>
              </Link>

              <div>
                <p>© taskr {appVersion}</p>

                <ul>
                  <li
                    onClick={() =>
                      this.openUrl('https://producthunt.com/posts/taskr')
                    }
                  >
                    About
                  </li>
                  <li
                    onClick={() =>
                      this.openUrl('https://github.com/bukinoshita/taskr')
                    }
                  >
                    Github
                  </li>
                  <li
                    onClick={() =>
                      this.openUrl(
                        'https://github.com/bukinoshita/taskr/releases'
                      )
                    }
                  >
                    Releases
                  </li>
                </ul>
              </div>
            </footer>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            jutify-content: space-between;
            min-height: 500px;
          }

          ul {
            flex-basis: 370px;
          }

          li {
            cursor: pointer;
            color: rgba(255, 255, 255, 0.65);
            height: 60px;
            line-height: 60px;
            font-size: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            transition: 0.2s;
          }

          li:hover {
            padding-left: 5px;
            color: ${colors.white};
          }

          .has-select {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: default;
          }

          .has-select:hover {
            padding-left: 0;
          }

          span {
            color: ${colors.white};
            border: 1px solid ${colors.white};
            margin-left: 5px;
            font-size: 10px;
            padding: 0 2px 1px;
          }

          .select {
            border: 1px solid rgba(255, 255, 255, 0.65);
            line-height: 1;
            padding: 2px;
            transition: 0.2s;
            cursor: pointer;
          }

          select {
            background-color: transparent;
            color: rgba(255, 255, 255, 0.65);
            outline: none;
            cursor: pointer;
            border: none;
          }

          .select:hover {
            border-color: ${colors.white};
          }

          .select:hover select {
            color: ${colors.white};
          }

          footer div {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          footer span {
            display: block;
            width: 100%;
            color: ${colors.darkMediumGray};
            height: 36px;
            font-weight: 600;
            font-size: 10px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
            transition: 0.2s all;
            margin: 0;
            padding: 0;
            border: 0;
          }

          footer span:hover {
            color: ${colors.white};
          }

          footer p {
            color: ${colors.white};
            font-size: 12px;
            opacity: 0.75;
            font-weight: 600;
          }

          footer ul {
            flex-basis: auto;
          }

          footer li {
            display: inline-block;
            border-bottom: 0;
            height: auto;
            line-height: auto;
            font-size: 12px;
            margin-left: 8px;
          }

          footer li:hover {
            padding-left: 0;
          }
        `}</style>
      </Page>
    )
  }
}

export default Settings
