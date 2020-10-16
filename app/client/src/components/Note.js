import React, {useContext} from "react"
import ProfileForm from "./ProfileForm"
import ProfileList from "./ProfileList"
import {UserContext} from "../context/UserProvider"

export default function Note(){
    const {
        user: {username},
        addNote,
        notes
    } = useContext(UserContext)
    return(
        <>
        <h4 style={{textAlign: "center",marginBottom: "1em"}}>Welcome {username}</h4>
        <ProfileForm addNote={addNote}/>
        {/* <h4 style={{textAlign: "center", marginTop: "1em"}}>Your notes</h4> */}
        <ProfileList notes={notes} />
        </>
    )
} 