import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
})
