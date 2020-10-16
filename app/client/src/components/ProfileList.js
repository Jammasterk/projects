import React, {useContext} from "react"
import Profile from "./Profile"
import {UserContext} from "../context/UserProvider"

export default function ProfileList(props){
    const {notes} = props
    const {deleteNote} = useContext(UserContext)
    return(
        <>
            {notes.map(note => <Profile {...note} key={note._id} deleteNote={deleteNote} />)}
        </>
    )
}