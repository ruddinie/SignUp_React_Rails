import React from 'react'
import logout from './../services/logout' 
export default function Dashboard() {
//   window.onload = console.log('cheguei na dashboard')

    return (
        <div>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}
