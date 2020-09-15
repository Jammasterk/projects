import React, {useContext} from "react"
import NoteForm from "./NoteForm"
import NoteList from "./NoteList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
    h1, p{
        text-align: center
    }
`



export default function Profile(){
    const {
        user:
        {username},
        addNote,
        notes
    } = useContext(UserContext)

    return (
      <div>
        <Wrapper>
          <h1>Welcome {username}</h1>
          <h5>Add note</h5>
          <NoteForm addNote={addNote} />
          <h5>Your Notes</h5>
          <NoteList notes={notes} />
        </Wrapper>
      </div>
    );
}
