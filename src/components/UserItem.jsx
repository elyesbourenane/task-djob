import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const UserItem = ({user}) => {
    const [todosCount, setTodosCount] = useState(0)
    const [albumsCount, setAlbumsCount] = useState(0)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}&completed=false`)
            .then(response => setTodosCount(response.data.length))
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
            .then(response => setAlbumsCount(response.data.length))
    }, [user.id])


    return (
        <tr>
            <td>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
            </td>

            <td>
                <a href={`http://${user.website}`} target="_blank" rel="nooper noreferrer">{user.website}</a>
            </td>

            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>{todosCount}</td>
            <td>{albumsCount}</td>
        </tr>
    )
}

export default UserItem