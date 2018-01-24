'use strict'

// Theme
import { colors } from './../../theme'

const TaskCheck = () => {
  return (
    <div>
      <label />

      <style jsx>{`
        label {
          height: 12px;
          width: 12px;
          display: block;
          border-radius: 50%;
          margin-right: 10px;
          margin-top: 6px;
          transition: 0.15s;
          position: relative;
          background-color: transparent;
          border: 0;
          cursor: default;
        }

        label:after {
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
