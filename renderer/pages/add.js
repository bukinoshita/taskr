'use strict'

// Packages
import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Hero from './../components/hero'
import Input from './../components/input'
import Button from './../components/button'

// Services
import { addTask, getUser, updateUser } from './../services/api'

class Add extends Component {
  constructor() {
    super()

    this.inputChange = this.inputChange.bind(this)
    this.createTask = this.createTask.bind(this)

    this.state = {
      title: '',
      description: '',
      project: ''
    }
  }

  inputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  createTask(e) {
    e.preventDefault()
    const { title, description, project } = this.state
    const { user } = getUser()
    let tab = 'Backlog'

    if (!user.createOn) {
      user.createOn = 'Today'
      updateUser(user)
    }

    tab = user.createOn

    addTask({ title, description, project, tab })
      .then(() => Router.push(`/start?tab=${tab}`))
      .catch(err => console.log(err))
  }

  render() {
    const { title, description, project } = this.state

    return (
      <Page>
        <Row>
          <section>
            <Hero type="New task" />

            <form onSubmit={this.createTask}>
              <fieldset>
                <Input
                  label="Title"
                  name="title"
                  placeholder="Change the World..."
                  size="large"
                  autoFocus={true}
                  onChange={this.inputChange}
                  value={title}
                  inputRef="title"
                />

                <Input
                  label="Description"
                  name="description"
                  placeholder="The people who are crazy enough to think they can change the world are the ones who do."
                  multiline={true}
                  onChange={this.inputChange}
                  value={description}
                  inputRef="description"
                />

                <Input
                  label="Project"
                  name="project"
                  placeholder="Awesome project"
                  onChange={this.inputChange}
                  value={project}
                  inputRef="project"
                  hasProject={true}
                />
              </fieldset>

              <footer>
                <Link href="/start" prefetch>
                  <span>Back</span>
                </Link>

                <Button type="submit">Create task</Button>
              </footer>
            </form>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            jutify-content: space-between;
            min-height: 500px;
          }

          form {
            height: 439px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          span {
            display: block;
            width: 100%;
            color: #aaa;
            height: 36px;
            font-weight: 600;
            font-size: 10px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
            transition: 0.2s all;
          }

          span:hover {
            color: white;
          }
        `}</style>
      </Page>
    )
  }
}

export default Add
