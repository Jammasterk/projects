import React, {useContext} from 'react'
import Comment from "./Comment.js"
import {UserContext} from "../context/UserProvider.js"

export default function CommentList(props){
    const {comments, getUserComments} = useContext(UserContext)
    getUserComments()
    
    return(
        
        
    <div>
        {comments.map((comment, i) => <Comment {...comment} key={i}/>)}
    </div>
    )
}