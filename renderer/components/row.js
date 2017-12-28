'use strict'

const Row = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          max-width: 300px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 25px;
          padding-right: 25px;
        }
      `}</style>
    </div>
  )
}

export default Row
