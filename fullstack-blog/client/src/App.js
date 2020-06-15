import React, {useState, useEffect} from "react"
import axios from "axios"
import AddUser from "./components/AddUser"
import User from "./components/User"

export default function App(){
    const [users, setUsers] = useState([])

    function getUsers(){
        axios
          .get("/users")
          .then((res) => setUsers(res.data))
          .catch((err) => console.log(err));
    }

    function addUser(newUser) {
      axios.post("/users", newUser)
        .then(res => {
            setUsers(prevUsers => [...prevUsers, res.data])
        })
        .catch((err) => console.log(err));
    }

    function deleteUser(userId){
        axios.delete(`/users/${userId}`)
        .then(res => {
            setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
        })
        .catch(err => console.log(err))
    }

    function editUser(updates, userId) {
      axios
        .put(`users/${userId}`, updates)
        .then((res) => {
            setUsers(prevUser => prevUser.map(user => user._id !== userId ? user : res.data))
        })
        .catch((err) => console.log(err));
    }

    useEffect(()=> {
       getUsers()
    }, [])
    return(
        <div>
            <AddUser 
            submit={addUser} 
            btnText="Add User"
            />
            {users.map(user => <User 
            {...user} 
            key={user.name}
            deleteUser={deleteUser}
            editUser={editUser}/>)}
        </div>
    )
}