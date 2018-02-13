'use strict'

// Packages
import { Component } from 'react'

// Layouts
import Page from './../layouts/page'

// Components
import Row from './../ui/row'
import ButtonLink from './../ui/button-link'

// Theme
import { colors, typography } from './../theme'

class Onboard extends Component {
  render() {
    return (
      <Page>
        <Row>
          <section>
            <h1>
              Welcome to <span>Taskr</span>
            </h1>

            <div>
              {/*
                <ButtonLink href="/signup">Pro — 14 days free trial</ButtonLink>
                */}

              <ButtonLink href="/home?tab=Today" color="dark">
                Continue on free version
              </ButtonLink>
            </div>
          </section>
        </Row>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            min-height: 580px;
            justify-content: space-between;
            padding-top: 200px;
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
        `}</style>
      </Page>
    )
  }
}

export default Onboard
