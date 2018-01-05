'use strict'

// Packages
import Link from 'next/link'
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

const Task = ({ task, onMove, onDelete, isDone }) => {
  const { id, title, description, project, type } = task
  const isToday = type === 'today' ? 'done' : 'today'
  const nextType = type === 'today' ? 'today' : 'backlog'
  const desc =
    description.length >= 30 ? `${description.substr(0, 30)}...` : description
  const hasProject = project ? (
    <span title={project}>
      {renderHTML(reactHashAvatar(project, { size: 8, radius: '50px' }))}

      <style jsx>{`
        span {
          flex-basis: 10px;
        }
      `}</style>
    </span>
  ) : null
  const backBacklog =
    type === 'today' ? (
      <li onClick={() => onMove('back', task)}>
        backlog
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

          li:hover {
            color: white;
          }
        `}</style>
      </li>
    ) : null
  const hasFooter = isDone ? null : (
    <div>
      <ul>
        <li onClick={() => onMove(nextType, task)}>{isToday}</li>

        {backBacklog}

        <li>
          <Link href={`/task?id=${id}`}>
            <span>view</span>
          </Link>
        </li>
        <li>
          <Link href={`/edit?id=${id}`}>
            <span>edit</span>
          </Link>
        </li>
        <li onClick={() => onDelete(task)}>delete</li>
      </ul>

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
    </div>
  )

  return (
    <li>
      <label onClick={() => onMove(task)} />

      <Link href={`/task?id=${id}`}>
        <div className="heading">
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>

          {hasProject}
        </div>
      </Link>

      <footer>{hasFooter}</footer>

      <style jsx>{`
        li {
          margin-bottom: 8px;
          display: flex;
          flex-wrap: wrap;
        }

        label {
          height: 12px;
          width: 12px;
          display: block;
          border: 1px dotted rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          margin-right: 15px;
          margin-top: 6px;
          cursor: pointer;
          transition: 0.15s;
        }

        .heading {
          max-width: calc(280px - 37px);
          flex-basis: calc(280px - 37px);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        label:hover {
          border-color: white;
          border-style: solid;
        }

        h2 {
          font-weight: 700;
          font-size: 14px;
          color: white;
          line-height: 1.5em;
          word-wrap: break-word;
        }

        p {
          color: #868e96;
          line-height: 1.75;
          font-size: 12px;
          margin: 2px 0;
          word-wrap: break-word;
        }

        footer {
          transform: translateY(-5px);
          opacity: 0;
          margin-left: 28px;
          transition: 0.2s;
          flex-basis: 100%;
        }

        li:hover footer {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </li>
  )
}

export default Task
