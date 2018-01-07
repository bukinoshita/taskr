'use strict'

// Packages
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

const TaskProject = ({ project }) => {
  if (project) {
    return (
      <span title={project}>
        {renderHTML(reactHashAvatar(project, { size: 8, radius: '50px' }))}

        <style jsx>{`
          span {
            flex-basis: 10px;
          }
        `}</style>
      </span>
    )
  }

  return null
}

export default TaskProject
