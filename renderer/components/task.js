'use strict'

// Packages
import Link from 'next/link'

const Task = ({ task, onMove, onDelete, isDone }) => {
  const { id, title, description, type } = task
  const isToday = type === 'today' ? 'done' : 'today'
  const hasFooter = isDone ? null : (
    <div>
      <ul>
        <li onClick={() => onMove(task)}>{isToday}</li>
        <li>
          <Link href={`/edit?id=${id}`}>
            <span>edit</span>
          </Link>
        </li>
        <li onClick={() => onDelete(task)}>delete</li>
      </ul>

      <style jsx>{`
        ul li {
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

        ul li:hover,
        span:hover {
          color: white;
        }
      `}</style>
    </div>
  )

  return (
    <li>
      <label onClick={() => onMove(task)} />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

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

        label:hover {
          border-color: white;
          border-style: solid;
        }

        h2 {
          font-weight: 700;
          font-size: 14px;
          color: white;
          line-height: 1.5em;
        }

        p {
          color: #868e96;
          line-height: 1.75;
          font-size: 12px;
          margin: 2px 0;
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
