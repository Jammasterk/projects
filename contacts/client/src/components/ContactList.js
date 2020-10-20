import React, {useContext} from "react"
import ContactForm from "./ContactForm"
import Contact from "./Contact"
import {UserContext} from "../context/UserProvider"


export default function ContactList(props){
    const {addContact} = props
    const {contacts, deleteContact, updateContact} = useContext(UserContext)

    return(
        <div>
            <ContactForm submit={addContact} btnText="Add contact" 
            />
           {
            contacts.map(contact => 
           <Contact 
           {...contact} 
           key={contact.firstName} 
           deleteContact={deleteContact} 
           updateContact={updateContact}/>)}
        </div>
    )
}