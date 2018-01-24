'use strict'

const Row = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
          padding-right: 25px;
          padding-left: 25px;
        }
      `}</style>
    </div>
  )
}

export default Row
