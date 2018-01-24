'use strict'

// Packages
import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../ui/row'
import Input from './../ui/input'
import Button from './../ui/button'

// Services
import api from './../services/api'
import { setCookie } from './../services/cookies'
import { getUser, updateUser } from './../services/local-storage'

// Theme
import { colors, typography } from './../theme'

class Signup extends Component {
  constructor() {
    super()

    this.inputChange = this.inputChange.bind(this)
    this.onSignup = this.onSignup.bind(this)

    this.state = {
      email: '',
      name: '',
      password: ''
    }
  }

  inputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  onSignup(e) {
    e.preventDefault()
    const { email, name, password } = this.state

    api
      .post('/signup', {
        email,
        name,
        password
      })
      .then(res => {
        if (res.token) {
          const { email, name, username, subscription } = res.user
          const { user } = getUser()

          setCookie(res.token)

          user.token = res.token
          user.email = email
          user.name = name
          user.username = username
          user.subscription = subscription

          updateUser(user)

          return Router.push('/home?tab=Today')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { email, name, password } = this.state

    return (
      <Page>
        <Row>
          <Link prefetch href="/onboard">
            <span className="back">Back</span>
          </Link>

          <section>
            <h1>
              Welcome to <span>Taskr</span>
            </h1>

            <form onSubmit={this.onSignup}>
              <fieldset>
                <Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  onChange={this.inputChange}
                  value={name}
                  inputRef="name"
                />

                <Input
                  label="Email"
                  name="email"
                  placeholder="Your email"
                  onChange={this.inputChange}
                  value={email}
                  inputRef="email"
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  onChange={this.inputChange}
                  value={password}
                  inputRef="password"
                />
              </fieldset>

              <Button type="submit">Signup</Button>
            </form>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            min-height: 580px;
            justify-content: space-between;
            padding-top: 100px;
            padding-bottom: 30px;
          }

          h1 {
            color: ${colors.white};
            font-weight: ${typography.thin};
            font-size: 40px;
            line-height: 50px;
          }

          span {
            font-weight: ${typography.bold};
          }

          form {
            margin-top: 50px;
            flex-basis: 270px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .back {
            position: absolute;
            top: 15px;
            right: 15px;
            color: ${colors.romanSilver};
            font-size: ${typography.f10};
            text-transform: uppercase;
            display: inline-block;
            z-index: 1;
            transition: 0.2s;
            cursor: pointer;
          }

          .back:hover {
            color: ${colors.white};
          }
        `}</style>
      </Page>
    )
  }
}

export default Signup
