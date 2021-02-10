import React, {useContext} from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import {UserContext} from "../context/UserProvider"

export default function NewAccount(){
    const {
        user:{
            username
        },
        addProfile,
        profiles
    } = useContext(UserContext)
    return(
        <div>
            <h1>Welcome {username}</h1>
            <h4>Your account information</h4>
            <UserForm addProfile={addProfile} />
            <h4>Your details</h4>
            <UserList profiles={profiles}/>
        </div>
    )
}