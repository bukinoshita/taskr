'use strict'

// Packages
import { Component } from 'react'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../components/row'
import Input from './../components/input'
import Button from './../components/button'

// Services
import api from './../services/api'

// Theme
import { colors, typography } from './../theme'

class Login extends Component {
  constructor() {
    super()

    this.inputChange = this.inputChange.bind(this)
    this.onLogin = this.onLogin.bind(this)

    this.state = {
      email: '',
      password: ''
    }
  }

  inputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  onLogin(e) {
    e.preventDefault()
    const { email, password } = this.state

    api
      .post('/login', {
        email,
        password
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { email, password } = this.state

    return (
      <Page>
        <Row>
          <section>
            <h1>
              Welcome to <span>Taskr</span>
            </h1>

            <form onSubmit={this.onLogin}>
              <fieldset>
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

              <Button type="submit">Login</Button>
            </form>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            min-height: 580px;
            justify-content: space-between;
            padding-top: 170px;
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
            flex-basis: 230px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        `}</style>
      </Page>
    )
  }
}

export default Login
