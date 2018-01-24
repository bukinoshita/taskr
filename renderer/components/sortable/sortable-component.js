'use strict'

// Components
import SortableList from './sortable-list'

const SortableComponent = ({ tasks, onSortEnd, onDelete, onMove }) => {
  return (
    <SortableList
      tasks={tasks}
      onSortEnd={onSortEnd}
      onDelete={onDelete}
      onMove={onMove}
      useDragHandle={true}
    />
  )
}

export default SortableComponent
