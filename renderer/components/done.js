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
          flex-basis: 315px;
          max-height: 315px;
          min-height: 315px;
        }
      `}</style>
    </ul>
  )
}

Done.defaultProps = {
  tasks: []
}

export default Done
