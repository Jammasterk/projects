import React from "react"
import Profile from "./Profile"

export default function ProfileList(props){
    const {notes, deleteNote} = props
    return(
        <>
            {notes.map(note => <Profile {...note} key={note._id} deleteNote={deleteNote} />)}
        </>
    )
}