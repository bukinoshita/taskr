'use strict'

// Packages
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'

// Theme
import { colors, typography } from './../theme'

const ButtonLink = ({ children, onClick, color, href }) => {
  const classnames = classNames(color)

  return (
    <button className={classnames} onClick={onClick}>
      <Link prefetch href={href}>
        <span>{children}</span>
      </Link>

      <style jsx>{`
        button {
          width: 100%;
          height: 40px;
          background-color: ${colors.white};
          color: ${colors.black};
          border: none;
          font-weight: ${typography.semibold};
          font-size: ${typography.f10};
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          outline: none;
        }

        span {
          height: 40px;
          line-height: 40px;
          display: block;
          width: 100%;
          color: ${colors.black};
        }

        .dark {
          background-color: ${colors.black};
          color: ${colors.white};
        }

        .dark span {
          color: ${colors.white};
        }
      `}</style>
    </button>
  )
}

ButtonLink.defaultProps = {
  onClick: null,
  href: '/home'
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired
}

export default ButtonLink
