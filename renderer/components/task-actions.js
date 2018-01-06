'use strict'

// Packages
import Link from 'next/link'

const TaskActions = ({ task, onDelete, onMove }) => {
  const { id, type } = task
  const isToday = type === 'today' ? 'done' : 'today'
  const nextType = type === 'today' ? 'today' : 'backlog'

  return (
    <ul>
      {type !== 'done' ? ( // eslint-disable-line no-negated-condition
        <li onClick={() => onMove(nextType, task)}>{isToday}</li>
      ) : null}

      {type !== 'backlog' ? ( // eslint-disable-line no-negated-condition
        <li onClick={() => onMove('back', task)}>backlog</li>
      ) : null}

      <li>
        <Link href={`/edit?id=${id}`}>
          <span>view</span>
        </Link>
      </li>

      <li onClick={() => onDelete(task)}>delete</li>

      <style jsx>{`
        li {
          color: white;
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          margin-right: 10px;
          color: #868e96;
          cursor: pointer;
        }

        span {
          color: #868e96;
        }

        li:hover,
        span:hover {
          color: white;
        }
      `}</style>
    </ul>
  )
}

export default TaskActions
