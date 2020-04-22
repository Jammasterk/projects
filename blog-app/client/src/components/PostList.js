import React, {useContext} from 'react'
import Post from "./Post.js"
import PostForm from "./PostForm.js"
import {UserContext} from '../context/UserProvider'

export default function PostList(props){
      const { addPost } = props;

    const { posts, deletePost, updatePost} = useContext(UserContext)

    return(
        <div className="postList">
            <PostForm 
                submit={addPost}
                btnTxt="Add Post"
            />
            {
            posts.map(post => 
            <Post 
            {...post} 
            key={post.title} 
            deletePost={deletePost} 
            updatePost={updatePost}/>)}

        </div>
    )
}