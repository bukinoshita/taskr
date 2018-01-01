'use strict'

// Components
import EmptyState from './empty-state'
import Task from './task'

const Done = ({ tasks }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks done" />
    ) : (
      tasks.map(task => <Task key={task.id} task={task} isDone={true} />)
    )

  return (
    <ul>
      {list}

      <style jsx>{`
        ul {
          overflow-y: auto;
          flex-basis: 340px;
          max-height: 340px;
          min-height: 340px;
          margin-left: -25px;
          margin-right: -25px;
          padding-left: 25px;
          padding-right: 25px;
        }
      `}</style>
    </ul>
  )
}

Done.defaultProps = {
  tasks: []
}

export default Done
