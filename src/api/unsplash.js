import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bcedf39624aec3e20db52ab598be2b843d5f53c11c314483071bfc7ec10a6141'
  }
})
