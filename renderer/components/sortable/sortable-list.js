'use strict'

// Packages
import { SortableContainer } from 'react-sortable-hoc'

// Components
import SortableItem from './sortable-item'

const SortableList = SortableContainer(({ tasks, onDelete, onMove }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          task={task}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
    </ul>
  )
})

export default SortableList
