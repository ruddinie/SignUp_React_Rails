// import axios from 'axios'
import api from './api'

export default async function authenticate(...params) {
    // console.log(params[0]?.signup)
    let auth = await api.post("/users"+ (!params[0]?.signup ? "/sign_in" : ""),{user:params[0]?.data},{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
      .then(function (response) {

       //storate session for auth header

        localStorage.setItem('auth', btoa(response.data.email + ":" + params[0]?.data.password));

        return response;

      })
      .catch(function (error) {
        // handle error
        return error.response;
      })
      // console.log(auth);
      return auth;
}