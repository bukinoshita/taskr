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
import { getUser, updateTask } from './../services/api'

// Theme
import { colors } from './../theme'

class Edit extends Component {
  constructor() {
    super()

    this.inputChange = this.inputChange.bind(this)
    this.editTask = this.editTask.bind(this)

    this.state = { title: '', description: '', project: '' }
  }

  componentDidMount() {
    const { url: { query: { id } } } = this.props
    const { user } = getUser()
    const { title, description, project } = user.tasks.filter(
      task => task.id === id
    )[0]

    if (title) {
      return this.setState({ title, description, project })
    }
  }

  inputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  editTask(e) {
    e.preventDefault()

    const { url: { query: { id } } } = this.props
    const { title, description, project } = this.state
    const newTask = { title, description, project }

    updateTask({ id, newTask })
      .then(() => Router.push('/start'))
      .catch(err => console.log(err))
  }

  render() {
    const { title, description, project } = this.state

    return (
      <Page>
        <Row>
          <section>
            <Hero type="Edit task" />

            <form onSubmit={this.editTask}>
              <fieldset>
                <Input
                  label="Title"
                  name="title"
                  placeholder={title}
                  size="large"
                  autoFocus={true}
                  onChange={this.inputChange}
                  value={title}
                  inputRef="title"
                />

                <Input
                  label="Description"
                  name="description"
                  placeholder={description}
                  multiline={true}
                  onChange={this.inputChange}
                  value={description}
                  inputRef="description"
                />

                <Input
                  label="Project"
                  name="project"
                  placeholder={project}
                  multiline={true}
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

                <Button type="submit">Save changes</Button>
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
            color: ${colors.darkMediumGray};
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
            color: ${colors.white};
          }
        `}</style>
      </Page>
    )
  }
}

export default Edit
