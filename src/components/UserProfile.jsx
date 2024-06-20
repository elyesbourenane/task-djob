import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import AlbumList from './AlbumList'

const UserProfile = () => {

    const [user, setUser] = useState(null)
    const {userId} = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => setUser(response.data));
    }, [userId])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className='container user-profile'>
            <Link className='back-link' to="/">&lt;-- Back to Users List</Link>
            <h1>{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h2>Albums:</h2>
            <AlbumList userId={userId} />
            
        </div>
    )
}

export default UserProfile