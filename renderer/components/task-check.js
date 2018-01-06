'use strict'

// Theme
import { colors } from './../theme'

const TaskCheck = ({ task, onMove }) => {
  const { type } = task
  const isDone = type === 'done' ? 'is-done' : ''
  const nextMove = type === 'backlog' ? 'backlog' : 'today'
  const hasAction = type === 'done' ? null : nextMove

  return (
    <div>
      <label className={isDone} onClick={() => onMove(hasAction, task)} />

      <style jsx>{`
        label {
          height: 12px;
          width: 12px;
          display: block;
          border: 1px dotted rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          margin-right: 10px;
          margin-top: 6px;
          cursor: pointer;
          transition: 0.15s;
          position: relative;
        }

        label:hover {
          border-color: ${colors.white};
          border-style: solid;
        }

        .is-done {
          background-color: transparent;
          border: 0;
          cursor: default;
        }

        .is-done:after {
          display: inline-block;
          width: 6px;
          height: 2px;
          position: absolute;
          left: 2px;
          top: 3px;
          border: 2px solid #00e7c0;
          border-top: 0;
          border-right: 0;
          color: ${colors.brightTurquoise};
          opacity: 1;
          transform: rotate(-45deg) scale(1);
          content: '';
        }
      `}</style>
    </div>
  )
}

export default TaskCheck
