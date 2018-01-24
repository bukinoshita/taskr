'use strict'

// Packages
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Theme
import { colors, typography } from './../theme'

const Button = ({ children, type, onClick, color }) => {
  const classnames = classNames(color)

  return (
    <button className={classnames} type={type} onClick={onClick}>
      {children}

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

        .dark {
          background-color: ${colors.black};
          color: ${colors.white};
        }
      `}</style>
    </button>
  )
}

Button.defaultProps = {
  onClick: null,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
