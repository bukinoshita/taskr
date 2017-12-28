'use strict'

// Packages
const uid = require('uid-promise')

export const getUser = () => {
  const storage = JSON.parse(localStorage.getItem('taskr'))

  if (storage) {
    return storage
  }

  return localStorage.setItem(
    'taskr',
    JSON.stringify({
      user: {
        tasks: []
      }
    })
  )
}

export const addTask = ({ title, description }) => {
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
      createdAt: new Date(),
      updatedAt: new Date(),
      type: 'backlog'
    }
    const tasks = [...user.tasks, task]
    user.tasks = tasks

    resolve(localStorage.setItem('taskr', JSON.stringify({ user })))
  })
}

export const updateUser = user => {
  return localStorage.setItem('taskr', JSON.stringify({ user }))
}
