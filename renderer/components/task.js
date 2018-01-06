'use strict'

// Packages
import Link from 'next/link'

// Components
import TaskCheck from './task-check'
import TaskProject from './task-project'
import TaskActions from './task-actions'

const Task = ({ task, onMove, onDelete }) => {
  const { id, title, description, project } = task
  const desc =
    description.length >= 30 ? `${description.substr(0, 30)}...` : description

  return (
    <li>
      <TaskCheck task={task} onMove={onMove} />

      <Link href={`/edit?id=${id}`}>
        <div className="heading">
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>

          <TaskProject project={project} />
        </div>
      </Link>

      <footer>
        <TaskActions task={task} onMove={onMove} onDelete={onDelete} />
      </footer>

      <style jsx>{`
        li {
          margin-bottom: 8px;
          display: flex;
          flex-wrap: wrap;
        }

        .heading {
          max-width: calc(280px - 37px);
          flex-basis: calc(280px - 37px);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          margin-left: 22px;
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
