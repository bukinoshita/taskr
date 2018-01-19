'use strict'

const Content = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          height: calc(580px - 246px);
          max-height: calc(580px - 246px);
          margin-bottom: 10px;
          overflow-y: auto;
          margin-left: -25px;
          margin-right: -25px;
          padding-left: 25px;
          padding-right: 25px;
        }
      `}</style>
    </div>
  )
}

export default Content
