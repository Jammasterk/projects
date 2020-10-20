import React, {useContext} from "react"
import ContactList from "./ContactList"
// import ContactForm from "./ContactForm"
import {UserContext} from "../context/UserProvider"

export default function Profile(){
    const {user: {username}, addContact, updateContact} = useContext(UserContext)
    return(
        <div>
            <h1 style={{textAlign: "center", fontSize: "30px"}}>Welcome {username}</h1>
            <ContactList 
            addContact={addContact}
            updateContact={updateContact}
            />
        </div>
    )
}