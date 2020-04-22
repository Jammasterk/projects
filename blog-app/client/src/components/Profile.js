import React, {useContext} from "react"
// import PostForm from "./PostForm.js"
import PostList from "./PostList.js"
// import Post from "./Post"
import {UserContext} from "../context/UserProvider.js"

export default function Profile(){
    const {user: {username}, addPost, updatePost} = useContext(UserContext)
    return (
        <div className="profile">
            <h1>Welcome {username}!</h1>
            <h3 className="title">Add Post</h3>
            
            <PostList 
            addPost={addPost}
            updatePost={updatePost}
            />
            {/* <PostList updatePost={updatePost}/> */}
        </div>
    )
}