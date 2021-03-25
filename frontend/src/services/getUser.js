import api from './api'

export default async function getUser(setUser) {
    // console.log(localStorage.auth)
    let response = await api.get('/dashboard/home',
        {headers:{
            'Authorization': "Basic  " + localStorage.auth,
        }}
    ).then((response)=>{
        console.log(response)
            setUser(response.data);
    })


}