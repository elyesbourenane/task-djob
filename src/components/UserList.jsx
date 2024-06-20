import  React, {useState, useEffect} from "react"
import axios from "axios"
import UserItem from "./UserItem"



const UserList = () => {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div className="container">
            <h1>Users List</h1>

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Number of Todos</th>
                        <th>Number of Albums</th>
                    </tr>
                </thead>

                <tbody>
                    {users?.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList