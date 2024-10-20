import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vasu-CE')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // } , [])

    const data = useLoaderData()
  return (
    <div className='text-center p-10 text-4xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="profile"/>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vasu-CE')
    return response.json();
}