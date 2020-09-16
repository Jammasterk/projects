import React from "react"


const Contact = (props) => {
    const {title, number, nickname, birthday, address, note, email} = props
    return(
        <div>
            <h4>{title}</h4>
            <p>{number}</p>
            <p>{address}</p>
            <p>{email}</p>
            <p>{birthday}</p>
            <p>{nickname}</p>
            <p>{note}</p>
        </div>
    )
}

export default Contact