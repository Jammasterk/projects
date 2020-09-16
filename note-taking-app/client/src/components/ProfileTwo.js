import React, {useContext} from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import {UserContext} from "../context/UserProvider"


export default function ProfileTwo(){

const {
    user: {username},
    addContact,
     contact
} = useContext(UserContext)

return(
    <div>
        <h1>Hello, {username}</h1>
        <h5>Add Contact</h5>
        <ContactForm addContact={addContact} />
        <h5>Your Contacts</h5>
        <ContactList contact={contact}/>

    </div>
)
}

