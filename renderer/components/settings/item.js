'use strict'

// Packages
import { shell } from 'electron'

// Theme
import { colors, typography } from './../../theme'

const Item = ({ children, name, description, url, onClick }) => {
  const hasClick = onClick ? onClick : undefined
  const hasUrl = url ? () => shell.openExternal(url) : undefined
  const clickFn = hasClick || hasUrl

  return (
    <li onClick={clickFn}>
      <div>
        <span>{name}</span>
        <p>{description}</p>
      </div>

      {children}

      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 20px;
          align-items: center;
          cursor: ${url || onClick ? 'pointer' : 'default'};
          transition: 0.2s;
        }

        li:hover {
          transform: ${url || onClick ? 'translateY(-4px)' : 'translateY(0)'};
        }

        div {
          flex-basis: 70%;
        }

        span {
          color: ${colors.white};
          font-size: ${typography.f16};
          font-weight: ${typography.bold};
        }

        p {
          color: ${colors.romanSilver};
          font-size: ${typography.f12};
          font-weight: ${typography.regular};
          line-height: 16px;
          margin-top: 5px;
        }
      `}</style>
    </li>
  )
}

export default Item
