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

   const today = new Date()
   var curHr= today.getHours()

   function timeOfDay(){

if (curHr < 12) {
  return <h4 style={{fontWeight: 200}}>good morning</h4>;
} else if (curHr < 18) {
  return <h4 style={{fontWeight: 200}}>good afternoon</h4>
} else {
  return <h4 style={{fontWeight: 200}}>good evening</h4>
}
   }

    

    return (
      <>
        <h4 style={{ textAlign: "center", marginBottom: "1em", width: "100%", marginTop: "1em", fontWeight: 200 }}>
          {timeOfDay()} {username}
        </h4>
        <ProfileForm addNote={addNote} />
        {/* <h4 style={{textAlign: "center", marginTop: "1em"}}>Your notes</h4> */}
        <ProfileList notes={notes} />
      </>
    );
} 