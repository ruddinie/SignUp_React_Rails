import React, { useEffect } from 'react'
import logout from './../services/logout' 
import getUser from './../services/getUser'
import { useState } from 'react'

export default function Dashboard() {
   const [user, setUser] = useState({});

   useEffect(() => {
    getUser(setUser);
   }, [])

    return (
        <div>
            <button onClick={logout}>
                Logout
            </button>
            {/* <button onClick={e => setUser(getUser(setUser))}>
                Getuser
            </button> */}
            Olá {user?.username}
        </div>
    )
}
