  
import axios from 'axios'
import logout from './logout'
const api = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:3001/api' : 'https://' + window.location.hostname + '/api',
    headers: { 
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
    validateStatus: function (status) {
      if(status === 401){
        logout();
      }
      return status >= 200 && status < 300; // default
    },
})

export default api