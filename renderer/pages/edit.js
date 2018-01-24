'use strict'

// Packages
import { Component } from 'react'
import Router from 'next/router'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../ui/row'
import Hero from './../components/hero'
import Input from './../ui/input'
import Button from './../ui/button'
import ButtonLink from './../ui/button-link'

// Services
import { getUser, updateTask } from './../services/local-storage'

// Theme
import { colors, typography } from './../theme'

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
      .then(() => Router.push('/home'))
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
                  label="Project"
                  name="project"
                  placeholder={project}
                  onChange={this.inputChange}
                  value={project}
                  inputRef="project"
                  hasProject={true}
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
              </fieldset>

              <div>
                <ButtonLink color="dark" href="/home?tab=Today">
                  Back
                </ButtonLink>

                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            jutify-content: space-between;
            height: 580px;
            padding-bottom: 30px;
          }

          form {
            height: calc(580px - 148px);
            max-height: calc(580px - 148px);
            margin-top: 30px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          span {
            display: block;
            width: 100%;
            color: ${colors.darkMediumGray};
            height: 36px;
            font-weight: ${typography.semibold};
            font-size: ${typography.f10};
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
