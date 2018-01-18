'use strict'

// Components
import EmptyState from './../empty-state'
import Task from './../task'

const Today = ({ tasks, onDelete, onMove }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks today" />
    ) : (
      tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} onMove={onMove} />
      ))
    )

  return <ul>{list}</ul>
}

Today.defaultProps = {
  tasks: []
}

export default Today
