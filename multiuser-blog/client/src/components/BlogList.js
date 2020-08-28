import React, { useContext } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm"
import {UserContext} from "../context/UserProvider"


function BlogList(props) {
  const { addNewBlog } = props;

  const {blogs, deleteBlog, updateBlog} = useContext(UserContext)


  return (
    <div>
      <BlogForm submit={addNewBlog} btnTxt="Add Blog"/>
      {blogs.map((blog) =>  
      <Blog 
      {
        ...blog} 
      key={blog._id} 
      deleteBlog={deleteBlog} 
      updateBlog={updateBlog}/>)}
    </div>
  );
}

export default BlogList;
