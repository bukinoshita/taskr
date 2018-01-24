'use strict'

// Components
import EmptyState from './../empty-state'
import SortableComponent from './../sortable/sortable-component'

const Backlog = ({ tasks, onDelete, onMove, onSortEnd }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks on backlog" />
    ) : (
      <SortableComponent
        tasks={tasks}
        onDelete={onDelete}
        onMove={onMove}
        onSortEnd={onSortEnd}
      />
    )

  return <div>{list}</div>
}

Backlog.defaultProps = {
  tasks: []
}

export default Backlog
