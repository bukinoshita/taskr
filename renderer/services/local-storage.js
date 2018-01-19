'use strict'

// Packages
import uid from 'uid-promise'

export const getUser = () => {
  const storage = JSON.parse(localStorage.getItem('taskr'))

  if (storage) {
    return storage
  }

  const cfg = {
    user: {
      tasks: [],
      createOn: 'Today',
      onboard: false,
      pro: false
    }
  }

  localStorage.setItem('taskr', JSON.stringify(cfg))

  return cfg
}

export const updateUser = user => {
  return localStorage.setItem('taskr', JSON.stringify({ user }))
}

export const addTask = ({ title, description, project, tab = 'Today' }) => {
  return new Promise(async (resolve, reject) => {
    if (!title) {
      return reject(new TypeError('title is required'))
    }

    const { user } = getUser()
    const id = await uid(20)
    const task = {
      id,
      title,
      description,
      project,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: tab.toLowerCase()
    }
    const tasks = [...user.tasks, task]
    user.tasks = tasks

    resolve(localStorage.setItem('taskr', JSON.stringify({ user })))
  })
}

export const updateTask = ({ id, newTask }) => {
  return new Promise(async (resolve, reject) => {
    if (!newTask && !id) {
      return reject(new TypeError('id and task is required'))
    }

    const { user } = getUser()
    const task = user.tasks.filter(task => task.id === id)[0]

    task.title = newTask.title || task.title
    task.description = newTask.description || task.description
    task.project = newTask.project || task.project
    task.updatedAt = new Date()

    const tasks = user.tasks.filter(t => {
      if (t.id === id) {
        return (t = task)
      }

      return t
    })

    user.tasks = tasks

    resolve(localStorage.setItem('taskr', JSON.stringify({ user })))
  })
}
