import React from 'react'
import { useContext } from 'react'
import userContext from '../context/context'

function Profile() {

    const {user} = useContext(userContext)

    if(!user) return <div>plase login</div>

    return <div>Welcome {user.userName} </div>
}

export default Profile