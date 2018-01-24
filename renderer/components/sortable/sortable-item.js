'use strict'

// Packages
import { SortableElement } from 'react-sortable-hoc'

// Components
import Task from './../task'

const SortableItem = SortableElement(({ task, onMove, onDelete }) => {
  return <Task task={task} onMove={onMove} onDelete={onDelete} />
})

export default SortableItem
