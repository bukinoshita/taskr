'use strict'

const EmptyState = ({ title }) => {
  return (
    <div>
      <h3>You do not have any {title}.</h3>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 275px;
        }

        h3 {
          color: white;
          text-align: center;
          font-size: 12px;
          width: 100%;
          opacity: 0.75;
          line-height: 20px;
        }
      `}</style>
    </div>
  )
}

export default EmptyState
