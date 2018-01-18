'use strict'

// Packages
import { Component } from 'react'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Hero from './../components/hero'
import Today from './../components/today'
import Backlog from './../components/backlog'
import Done from './../components/done'
import ButtonLink from './../components/button-link'
import Navigation from './../components/navigation'
import Content from './../components/content'

// Services
import { getUser, updateUser } from './../services/api'

class Home extends Component {
  constructor() {
    super()

    this.selectTab = this.selectTab.bind(this)
    this.onDelete = this.onDelete.bind(this)

    this.state = {
      user: {},
      tabSelected: 'Today'
    }
  }

  componentDidMount() {
    const { url: { query: { tab } } } = this.props
    const { user } = getUser()
    const tabSelected = tab ? tab : 'Today'

    this.setState({ user, tabSelected })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url.query.tab !== this.props.url.query) {
      this.selectTab(nextProps.url.query.tab)
    }
  }

  selectTab(tabSelected) {
    this.setState({ tabSelected })
  }

  onDelete(task) {
    const { user } = getUser()

    user.tasks = user.tasks.filter(({ id }) => id !== task.id)
    updateUser(user)
    this.setState({ user })
  }

  onMove(type, task) {
    const { user } = getUser()

    if (type === 'backlog') {
      const taskUpdated = user.tasks.map(t => {
        if (t.id === task.id) {
          t.type = 'today'
          return t
        }

        return t
      })

      user.tasks = taskUpdated
      updateUser(user)
      return this.setState({ user })
    }

    if (type === 'today') {
      const taskUpdated = user.tasks.map(t => {
        if (t.id === task.id) {
          t.type = 'done'
          return t
        }

        return t
      })

      user.tasks = taskUpdated
      updateUser(user)
      return this.setState({ user })
    }

    if (type === 'back') {
      const taskUpdated = user.tasks.map(t => {
        if (t.id === task.id) {
          t.type = 'backlog'
          return t
        }

        return t
      })

      user.tasks = taskUpdated
      updateUser(user)
      return this.setState({ user })
    }
  }

  render() {
    let content
    const { tabSelected, user } = this.state
    const tasks = user.tasks
    const list = [
      { name: 'Today', href: '/home?tab=Today' },
      { name: 'Backlog', href: '/home?tab=Backlog' },
      { name: 'Done', href: '/home?tab=Done' }
    ]

    switch (tabSelected) {
      case 'Today':
        const todayTasks = tasks
          ? tasks.filter(({ type }) => type === 'today')
          : []
        content = (
          <Today
            tasks={todayTasks}
            onDelete={this.onDelete}
            onMove={(type, task) => this.onMove(type, task)}
          />
        )
        break

      case 'Backlog':
        const backlogTasks = tasks
          ? tasks.filter(({ type }) => type === 'backlog')
          : []
        content = (
          <Backlog
            tasks={backlogTasks}
            onDelete={this.onDelete}
            onMove={(type, task) => this.onMove(type, task)}
          />
        )
        break

      case 'Done':
        const doneTasks = tasks
          ? tasks.filter(({ type }) => type === 'done')
          : []
        content = (
          <Done
            tasks={doneTasks}
            onDelete={this.onDelete}
            onMove={(type, task) => this.onMove(type, task)}
          />
        )
        break
    }

    return (
      <Page>
        <Row>
          <section>
            <Hero type={tabSelected} />

            <Navigation list={list} tabSelected={tabSelected} />

            <Content>{content}</Content>

            <ButtonLink href="/add">Add new task</ButtonLink>
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

export default Home
