'use strict'

// Packages
import { Component } from 'react'
import Link from 'next/link'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Hero from './../components/hero'
import Today from './../components/today'
import Backlog from './../components/backlog'
import Done from './../components/done'
import Button from './../components/button'

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
    const { tabSelected, user } = this.state
    const tasks = user.tasks
    let content

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

            <ul>
              <li
                className={tabSelected === 'Today' ? 'active' : ''}
                onClick={() => this.selectTab('Today')}
              >
                Today
              </li>
              <li
                className={tabSelected === 'Backlog' ? 'active' : ''}
                onClick={() => this.selectTab('Backlog')}
              >
                Backlog
              </li>
              <li
                className={tabSelected === 'Done' ? 'active' : ''}
                onClick={() => this.selectTab('Done')}
              >
                Done
              </li>
            </ul>

            {content}

            <footer>
              <Link href="/add" prefetch>
                <Button>Add new task</Button>
              </Link>
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
            margin-bottom: 30px;
          }

          li {
            color: white;
            display: inline-block;
            margin-right: 16px;
            font-size: 13px;
            opacity: 0.5;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
          }

          .active {
            opacity: 1;
            font-weight: 700;
          }

          footer {
            height: 75px;
            padding-top: 15px;
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
