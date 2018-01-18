'use strict'

const Content = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          height: calc(580px - 215px);
          margin-bottom: 10px;
          overflow-y: auto;
          max-height: calc(580px - 215px);
        }
      `}</style>
    </div>
  )
}

export default Content
