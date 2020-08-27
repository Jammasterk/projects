import React from "react"

const List = (props) => {
    const {title, author, image, content, tags} = props
    return(
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
            <img src={image} alt=""/>
            <p>{content}</p>
            <small>{tags}</small>
        </div>
    )
}

export default List