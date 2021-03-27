  
import axios from 'axios'
import logout from './logout'
const api = axios.create({
    baseURL: "http://" + window.location.hostname + ':3001',
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