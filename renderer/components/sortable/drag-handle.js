'use strict'

// Packages
import { SortableHandle } from 'react-sortable-hoc'

// Components
import DraggerIcon from './../../icons/dragger'

const DragHandle = SortableHandle(() => <DraggerIcon />)

export default DragHandle
