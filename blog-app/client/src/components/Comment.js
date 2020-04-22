import React from "react"

export default function Comment(props){
    const {author, comment} = props

    return(
        <div>
            <p>{author}</p>
            <p>{comment}</p>
        </div>
    )
}