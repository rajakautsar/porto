import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? '/api'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPortfolio = () => api.get('/portfolio')
export const getSkills = () => api.get('/skills')
export const getExperience = () => api.get('/experience')
export const getProjects = () => api.get('/projects')
export const sendContact = (payload) => api.post('/contact', payload)
