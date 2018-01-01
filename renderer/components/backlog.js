'use strict'

// Components
import EmptyState from './empty-state'
import Task from './task'

const Backlog = ({ tasks, onDelete, onMove }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks on backlog" />
    ) : (
      tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} onMove={onMove} />
      ))
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

Backlog.defaultProps = {
  tasks: []
}

export default Backlog
