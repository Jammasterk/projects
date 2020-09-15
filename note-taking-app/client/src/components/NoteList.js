import React from "react"
import Note from "./Note"

export default function NoteList(props){
    const {notes} = props
    return(
        <div>
            {notes.map(note => <Note {...note} key={note._id} />)}
        </div>
    )
}