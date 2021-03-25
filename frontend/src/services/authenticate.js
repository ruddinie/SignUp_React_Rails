// import axios from 'axios'
import api from './api'
import { toast } from 'react-toastify';

export default async function authenticate(...params) {
    // console.log(params[0]?.signup)
    await api.post("/users"+ (!params[0]?.signup ? "/sign_in" : ""),{user:params[0]?.data},{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
      .then(function (response) {

       //storate session for auth header

        localStorage.setItem('auth', btoa(response.data.email + ":" + params[0]?.data.password));
        // setTimeout(true, 50)
        params[0].history.push('/dashboard');
        if(response.status === 201){
          toast.success('Bem vindo! Você entrou com sucesso!');

        }

      })
      .catch(function (error) {
        // handle error
        switch(error?.response?.status){
          case 401:   
              toast.error('E-mail ou senha incorretos');
              break;
          case 500:
              toast.error('Ocorreu um erro. Verifique se já não está cadastrou ou tente novamente mais tarde');
              break;
        }
      })
}