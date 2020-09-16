import React, {useContext} from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`

h5{
    /* width: 80%;
    margin: 0 auto */
    text-align: center
}
h1{
        text-align: center;
        font-size: 32px
    }
`


export default function ProfileTwo(){

const {
    user: {username},
    addContact,
     contact
} = useContext(UserContext)

return(
    <div>
        <Wrapper>
        <h1>Hello, {username}</h1>
        <h5>Add Contact</h5>
        <ContactForm addContact={addContact} />
        <h5>Your Contacts</h5>
        <ContactList contact={contact}/>
    </Wrapper>
    </div>
)
}

