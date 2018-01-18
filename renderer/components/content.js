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
        }
      `}</style>
    </div>
  )
}

export default Content
