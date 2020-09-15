import React from "react"

const Note = (props) => {

  const {title, note, date,image} = props
    return (
      <div> 
        <h2>{title}</h2>
        <h6>{date}</h6>
        <p>{note}</p>
        <img src={image} alt=""/> 
      </div>
    );
}

export default Note