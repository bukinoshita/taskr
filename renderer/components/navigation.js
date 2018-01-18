'use strict'

// Packages
import Link from 'next/link'
import PropTypes from 'prop-types'

// Theme
import { colors, typography } from './../theme'

const Navigation = ({ list, tabSelected }) => {
  return (
    <nav>
      <ul>
        {list.map(({ name, href }) => {
          return (
            <li key={name} className={tabSelected === name ? 'active' : ''}>
              <Link href={href}>
                <span>{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        ul {
          width: 100%;
          overflow-x: auto;
          white-space: nowrap;
          padding-top: 30px;
          padding-bottom: 30px;
        }

        li {
          display: inline-block;
          font-size: ${typography.f14};
          margin-right: 15px;
          font-weight: ${typography.semibold};
        }

        li:last-child {
          margin-right: 0;
        }

        .active span {
          color: ${colors.white};
        }

        span {
          color: ${colors.romanSilver};
          cursor: pointer;
          transition: 0.2s;
        }

        span:hover {
          color: ${colors.white};
        }
      `}</style>
    </nav>
  )
}

Navigation.propTypes = {
  list: PropTypes.array.isRequired
}

export default Navigation
