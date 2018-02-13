'use strict'

// Packages
import { remote, shell } from 'electron'
import { Component } from 'react'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../ui/row'
import Hero from './../components/hero'
import Navigation from './../components/navigation'
import Identity from './../components/settings/identity'
import Account from './../components/settings/account'
import AppInfo from './../components/settings/app-info'
import Social from './../components/settings/social'
import Content from './../components/content'

// Sertvices
import { getUser, updateUser } from './../services/local-storage'
import { exportUser, importUser, clearHistory } from './../services/settings'

class Settings extends Component {
  constructor() {
    super()

    this.openUrl = this.openUrl.bind(this)
    this.onClearHistory = this.onClearHistory.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.selectTab = this.selectTab.bind(this)

    this.state = {
      defaultOption: 'Today',
      tabSelected: 'Identity',
      email: '',
      username: ''
    }
  }

  componentDidMount() {
    const { url: { query: { tab } } } = this.props
    const { user } = getUser()
    const { createOn } = user
    const tabSelected = tab ? tab : 'Identity'

    console.log(user)

    this.setState({
      defaultOption: createOn,
      tabSelected,
      user
    })
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
    const { tabSelected, defaultOption, user } = this.state
    const list = [
      { name: 'Identity', href: '/settings?tab=Identity' },
      { name: 'Account', href: '/settings?tab=Account' },
      // { name: 'Billing', href: '/settings?tab=Billing' },
      { name: 'App info', href: '/settings?tab=App info' }
    ]

    switch (tabSelected) {
      case 'Identity':
        content = <Identity user={user} />
        break

      case 'Account':
        content = (
          <Account
            importUser={importUser}
            exportUser={exportUser}
            clearHistory={this.onClearHistory}
            selectChange={this.onSelectChange}
            defaultOption={defaultOption}
          />
        )
        break

      case 'Billing':
        content = <h1>Billing</h1>
        break

      case 'App info':
        content = <AppInfo />
        break

      default:
        content = <Identity />
    }

    return (
      <Page>
        <Row>
          <section>
            <Hero type="Settings" isSettings={true} />

            <Navigation list={list} tabSelected={tabSelected} />

            <Content>{content}</Content>

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
