import React from "react"
import Contact from "./Contact"

export default function ContactList(props){
    const {contact} = props
    return(
        <div>
        {contact.map(cont => <Contact {...cont} key={cont._id} />)}
        </div>
    )
}