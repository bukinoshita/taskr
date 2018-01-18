'use strict'

// Components
import EmptyState from './../empty-state'
import Task from './../task'

const Done = ({ tasks, onDelete, onMove }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks done" />
    ) : (
      tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} onMove={onMove} />
      ))
    )

  return <ul>{list}</ul>
}

Done.defaultProps = {
  tasks: []
}

export default Done
