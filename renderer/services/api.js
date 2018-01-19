'use strict'

import axios from 'axios'

import { getCookie } from './cookies'

const apiUrl = process.env.API_URL

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json'
  },
  withCredentials: true
})

api.interceptors.request.use(config => {
  const accessToken = getCookie('taskr')

  if (accessToken) {
    config.headers.authorization = accessToken
  }

  return config
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
