import React, {useContext} from "react"
import PublicList from "./PublicList"
import {UserContext} from "../context/UserProvider"
import Blog from "./Blog"
import BlogForm from "./BlogForm"
import moment from "moment";
import styled from "styled-components";

export default function Public(){
    const {
      user: { username },
      addNewBlog,
      updateBlog,
      blogs,
    } = useContext(UserContext);
    

    const str = username;
    const users = str[0].toUpperCase();
    const user2 = str.slice(1, 25);
    const fullUser = users + user2;

    const time = moment().format("h:mm a"); 

    return (
      <div>
        <h2>
          Welcome {fullUser}, it is now {time}
        </h2>
        <h4>Write an article:</h4>
        {/* <BlogForm addNewBlog={addNewBlog} updateBlog={updateBlog} /> */}
        <PublicList
          blogs={blogs}
          updateBlog={updateBlog}
          addNewBlog={addNewBlog}
        />
      </div>
    );
}