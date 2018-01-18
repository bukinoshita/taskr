'use strict'

// Packages
import { remote, shell } from 'electron'
import { Component } from 'react'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Hero from './../components/hero'
import Navigation from './../components/navigation'
import Identity from './../components/settings/identity'
import AppInfo from './../components/settings/app-info'
import Social from './../components/settings/social'

// Sertvices
import { getUser, updateUser } from './../services/api'
import { exportUser, importUser, clearHistory } from './../services/settings'

class Settings extends Component {
  constructor() {
    super()

    this.openUrl = this.openUrl.bind(this)
    this.onClearHistory = this.onClearHistory.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.selectTab = this.selectTab.bind(this)

    this.state = { defaultOption: 'Today', tabSelected: 'Identity' }
  }

  componentDidMount() {
    const { url: { query: { tab } } } = this.props
    const { user } = getUser()
    const { createOn } = user
    const tabSelected = tab ? tab : 'Identity'

    this.setState({ defaultOption: createOn, tabSelected })
  }

  componentWillReceiveProps({ url: { query: { tab } } }) {
    if (tab !== this.props.url.query) {
      this.selectTab(tab)
    }
  }

  selectTab(tabSelected) {
    this.setState({ tabSelected })
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
    let content
    const { tabSelected } = this.state
    const { defaultOption } = this.state
    const list = [
      { name: 'Identity', href: '/settings?tab=Identity' },
      { name: 'Account', href: '/settings?tab=Account' },
      { name: 'Billing', href: '/settings?tab=Billing' },
      { name: 'App info', href: '/settings?tab=App info' }
    ]

    switch (tabSelected) {
      case 'Identity':
        content = <Identity />
        break

      case 'Account':
        content = <h1>Account</h1>
        break

      case 'Billing':
        content = <h1>Billing</h1>
        break

      case 'App info':
        content = <AppInfo />
        break

      default:
        content = <h1>Identity</h1>
    }

    return (
      <Page>
        <Row>
          <section>
            <Hero type="Settings" />

            <Navigation list={list} tabSelected={tabSelected} />

            {content}

            <Social />
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 580px;
            padding-bottom: 30px;
          }
        `}</style>
      </Page>
    )
  }
}

export default Settings
