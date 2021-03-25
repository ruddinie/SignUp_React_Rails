  
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { 
            'Authorization': 'Basic'+ localStorage.getItem('auth')
          }
})

export default api