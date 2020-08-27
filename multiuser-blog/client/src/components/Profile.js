import React, {useContext} from "react"
import BlogList from "./BlogList"
import BlogForm from "./BlogForm"
import {UserContext} from "../context/UserProvider"
import moment from "moment"
import styled from "styled-components"

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  h2,
  h4 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
  h2 {
    padding: 0 10px;
    margin-top: 1.5em;
  }
  button {
    width: 50%;
    height: 50px;
    background: transparent;
    border-radius: 5px;
    border: 2px solid blue;
    color: blue;
  }
  button:focus {
    outline: none;
  }
  img{
    width: 100%
  }
`;

const Profile = () => {
    const {user: {username}, addNewBlog, updateBlog, blogs} = useContext(UserContext)

    const str = username
    const users = str[0].toUpperCase()
    const user2 = str.slice(1, 25)
    const fullUser = users + user2

    const time = moment().format("h:mm a"); 
    return (
      <div>
        <Wrapper>
          <h2>
            Welcome {fullUser}, it is now {time}
          </h2>
          <h4>Write an article:</h4>
          <BlogForm addNewBlog={addNewBlog} /> 
          <BlogList 
          blogs={blogs} 
          />
        </Wrapper>
      </div>
    );
}

export default Profile