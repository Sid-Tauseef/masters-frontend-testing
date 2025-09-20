import axios from 'axios'

// Get API URL and ensure it doesn't have trailing slash
const getApiUrl = () => {
  const url = import.meta.env.VITE_API_URL?.trim();
  return url?.endsWith('/') ? url.slice(0, -1) : url;
};

// Create axios instance with base configuration
const api = axios.create({
  baseURL: getApiUrl(),
  timeout: 30000, // Increased timeout for Vercel cold starts
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Important for CORS
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    
    // Add auth token if available
    const token = localStorage.getItem('adminToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Ensure proper headers for all requests
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    
    return config
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} from ${response.config.url}`);
    return response
  },
  (error) => {
    console.error('❌ API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    });

    // Handle specific error cases
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('adminToken')
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/login'
      }
    }
    
    if (error.response?.status === 403) {
      // Forbidden - could be CORS or permissions
      const message = error.response?.data?.message || 'Access denied';
      console.error('Access denied:', message);
      
      // Check if it's a CORS error
      if (message.includes('CORS') || message.includes('cors')) {
        alert('CORS Error: Please contact support if this persists.');
      }
    }
    
    if (error.response?.status >= 500) {
      // Server error
      console.error('Server error:', error.response?.data?.message || error.message);
    }
    
    if (error.code === 'ECONNABORTED') {
      // Timeout error
      console.error('Request timeout - the server took too long to respond');
    }
    
    if (!error.response && error.message.includes('Network Error')) {
      // Network/CORS error
      console.error('Network/CORS error - check backend deployment and CORS settings');
    }
    
    return Promise.reject(error)
  }
)

// Helper function to test API connectivity
export const testConnection = async () => {
  try {
    const response = await api.get('/health');
    console.log('✅ API connection test successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ API connection test failed:', error);
    return { success: false, error: error.message };
  }
};

export default api