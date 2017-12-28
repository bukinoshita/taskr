'use strict'

// Packages
import PropTypes from 'prop-types'

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}

      <style jsx>{`
        button {
          width: 100%;
          height: 36px;
          background: white;
          border: none;
          color: #000;
          font-weight: 600;
          font-size: 10px;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          outline: none;
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
