'use strict'

// Packages
import classNames from 'classnames'
import PropTypes from 'prop-types'
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

// Theme
import { colors, typography } from './../theme'

const Input = ({
  name,
  label,
  multiline,
  type,
  placeholder,
  success,
  error,
  hint,
  size,
  value,
  autoFocus,
  onChange,
  readOnly,
  hasProject
}) => {
  const classnames = classNames(size)

  const project =
    hasProject && value ? (
      <span>
        {renderHTML(reactHashAvatar(value, { size: 8, radius: '50px' }))}
        <style jsx>{`
          span {
            margin-left: 2px;
          }
        `}</style>
      </span>
    ) : null

  return (
    <div>
      <label htmlFor={name}>
        {label} {project}
      </label>

      {multiline ? (
        <textarea
          name={name}
          id={name}
          className={classnames}
          rows="1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          readOnly={readOnly}
        />
      ) : (
        <input
          name={name}
          id={name}
          className={classnames}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          readOnly={readOnly}
        />
      )}

      {(hint || error || success) && <p>{success || error || hint}</p>}

      <style jsx>{`
        div {
          width: 100%;
          position: relative;
          margin-bottom: 25px;
          transition: all 0.2s;
        }

        div:hover p {
          opacity: 1;
        }

        div:hover input,
        div:hover textarea {
          color: ${colors.white};
        }

        div:hover input::-webkit-input-placeholder {
          color: ${colors.white};
        }

        div:hover input::-moz-placeholder {
          color: ${colors.white};
        }

        div:hover input:-ms-input-placeholder {
          color: ${colors.white};
        }

        div:hover input:-moz-placeholder {
          color: ${colors.white};
        }

        div:hover textarea::-webkit-input-placeholder {
          color: ${colors.white};
        }

        div:hover textarea::-moz-placeholder {
          color: ${colors.white};
        }

        div:hover textarea:-ms-input-placeholder {
          color: ${colors.white};
        }

        div:hover textarea:-moz-placeholder {
          color: ${colors.white};
        }

        input {
          width: 100%;
          border: none;
          font-size: ${typography.f12};
          color: ${colors.white};
          outline: none;
          background: none;
          appearance: none;
          border-radius: 2px;
          transition: all 0.2s;
          line-height: 20px;
        }

        textarea {
          width: 100%;
          border: none;
          font-size: ${typography.f12};
          color: ${colors.white};
          outline: none;
          background: none;
          appearance: none;
          border-radius: 2px;
          resize: none;
          height: auto;
          overflow: auto;
          min-height: 125px;
          transition: all 0.2s;
          line-height: 20px;
        }

        .large {
          padding-left: 0;
          padding-right: 0;
          font-size: ${typography.f24};
          font-weight: ${typography.semibold};
        }

        .medium {
          padding-left: 0;
          padding-right: 0;
          font-size: ${typography.f20};
          font-weight: ${typography.regular};
        }

        input::-webkit-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        input::-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        input:-ms-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        input:-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        textarea::-webkit-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        textarea::-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        textarea:-ms-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        textarea:-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        .large::-webkit-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        .large::-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        .large:-ms-input-placeholder {
          color: ${colors.darkMediumGray};
        }

        .large:-moz-placeholder {
          color: ${colors.darkMediumGray};
        }

        input:focus::-webkit-input-placeholder {
          color: ${colors.white};
        }

        input:focus::-moz-placeholder {
          color: ${colors.white};
        }

        input:focus:-ms-input-placeholder {
          color: ${colors.white};
        }

        input:focus:-moz-placeholder {
          color: ${colors.white};
        }

        textarea:focus::-webkit-input-placeholder {
          color: ${colors.white};
        }

        textarea:focus::-moz-placeholder {
          color: ${colors.white};
        }

        textarea:focus:-ms-input-placeholder {
          color: ${colors.white};
        }

        textarea:focus:-moz-placeholder {
          color: ${colors.white};
        }

        label {
          display: block;
          color: ${colors.darkMediumGray};
          font-size: ${typography.f12};
          margin-bottom: 10px;
        }

        p {
          margin-top: 10px;
          font-size: 12px;
          font-family: Helvetica Neue;
          color: ${colors.darkMediumGray};
          font-style: italic;
          opacity: 0.75;
        }
      `}</style>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['normal', 'large', 'medium']),
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  hint: '',
  error: '',
  success: '',
  multiline: false,
  icon: null,
  value: '',
  size: 'normal',
  autoFocus: false,
  readOnly: false
}

export default Input
