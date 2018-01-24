'use strict'

// Packages
import { remote } from 'electron'

// Components
import Item from './item'
import ArrowRightIcon from './../../icons/arrow-right'

// Theme
import { colors, typography } from './../../theme'

const AppInfo = () => {
  const appVersion = remote && remote.app ? remote.app.getVersion() : '1.0.0'

  return (
    <ul>
      <Item name="Version" description="macOS app version">
        <span>v{appVersion}</span>
      </Item>

      <Item
        name="Website"
        description="Taskr official website"
        url="https://gettaskr.now.sh"
      >
        <ArrowRightIcon />
      </Item>

      <Item
        name="Support"
        description="Send an email to us for support or to report a bug"
        url="https://gettaskr.now.sh/support"
      >
        <ArrowRightIcon />
      </Item>

      <Item
        name="Terms of Services"
        description="Our Terms of Services"
        url="https://gettaskr.now.sh/tos"
      >
        <ArrowRightIcon />
      </Item>

      <Item
        name="Privacy Policy"
        description="Our Policy"
        url="https://gettaskr.now.sh/privacy"
      >
        <ArrowRightIcon />
      </Item>

      <style jsx>{`
        span {
          color: ${colors.white};
          font-size: ${typography.f16};
          font-weight: ${typography.bold};
        }
      `}</style>
    </ul>
  )
}

export default AppInfo
