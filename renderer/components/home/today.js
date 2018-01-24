'use strict'

// Components
import EmptyState from './../empty-state'
import SortableComponent from './../sortable/sortable-component'

const Today = ({ tasks, onDelete, onMove, onSortEnd }) => {
  const list =
    tasks.length === 0 ? (
      <EmptyState title="tasks today" />
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

Today.defaultProps = {
  tasks: []
}

export default Today
