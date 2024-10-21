import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center p-10 text-4xl' >User : {id} </div>
  )
}

export default User