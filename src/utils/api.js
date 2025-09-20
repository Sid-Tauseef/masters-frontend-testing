import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.trim(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('adminToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('adminToken')
      // Only redirect if we're in admin area
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/login'
      }
    }
    
    if (error.response?.status === 403) {
      // Forbidden - show error message
      console.error('Access denied:', error.response.data.message)
    }
    
    if (error.response?.status >= 500) {
      // Server error
      console.error('Server error:', error.response.data.message)
    }
    
    if (error.code === 'ECONNABORTED') {
      // Timeout error
      console.error('Request timeout')
    }
    
    if (!error.response) {
      // Network error
      console.error('Network error - please check your connection')
    }
    
    return Promise.reject(error)
  }
)

export default api