'use strict'

// Components
import TaskCheck from './task-check'
import TaskProject from './task-project'
import TaskActions from './task-actions'
import DragHandle from './../sortable/drag-handle'

// Theme
import { colors, typography } from './../../theme'

const Task = ({ task, onMove, onDelete }) => {
  const { title, description, project, type } = task
  const desc =
    description.length >= 30 ? `${description.substr(0, 50)}...` : description

  return (
    <li>
      {type === 'done' ? <TaskCheck /> : null}

      <div className="heading">
        <div>
          <h2>
            {title} <TaskProject project={project} />
          </h2>
          <p>{desc}</p>
        </div>

        <div className="dragger">
          <DragHandle />
        </div>
      </div>

      {type !== 'done' ? ( // eslint-disable-line no-negated-condition
        <div className="actions">
          <TaskActions task={task} onMove={onMove} onDelete={onDelete} />
        </div>
      ) : null}

      <style jsx>{`
        li {
          margin-bottom: 20px;
          display: flex;
          flex-wrap: wrap;
        }

        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: ${type === 'done' ? 'calc(280px - 37px)' : '100%'};
          flex-basis: ${type === 'done' ? 'calc(280px - 37px)' : '100%'};
        }

        h2 {
          font-weight: ${typography.bold};
          font-size: ${typography.f16};
          color: ${colors.white};
          line-height: 1.5em;
          word-wrap: break-word;
        }

        p {
          color: ${colors.romanSilver};
          line-height: 1.75;
          font-size: ${typography.f12};
          margin-top: 5px;
          word-wrap: break-word;
        }

        .dragger {
          flex-basis: 10px;
          cursor: -webkit-grab;
        }

        .actions {
          transform: translateY(-5px);
          opacity: 0;
          max-height: 0;
          transition: 0.2s;
          flex-basis: 100%;
        }

        li:hover .actions {
          opacity: 1;
          max-height: auto;
          transform: translateY(0);
        }
      `}</style>
    </li>
  )
}

export default Task
