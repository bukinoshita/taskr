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

  return <ul>{list}</ul>
}

Backlog.defaultProps = {
  tasks: []
}

export default Backlog
