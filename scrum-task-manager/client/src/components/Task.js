import React, {useState, useContext} from "react"
import styled from "styled-components"
import {FaTrashAlt, FaEdit} from "react-icons/fa"
import AddDescriptionForm from "./AddDescriptionForm"
import Description from "./Description"
import {UserContext} from "../context/UserProvider"
import AddTaskForm from "./AddTaskForm"
// import { format } from "date-fns";


const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");
  .container {
    /* border: 1px solid black; */
    display: inline-block;
    padding: 1em;
    border-radius: 1em;
    margin: 0.33em;
    width: 250px;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    margin-top: 4em;
  }
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 16px;
  }

  small {
    font-family: "Poppins", sans-serif;
    font-size: 8px
  }

  svg {
    font-size: 24px;
    color: #f85959;
  }

  button {
    border: none;
    background: none;
  }

  .edit {
    color: #278ea5;
  }
`;

const Task = (props) => {

  

    // const dateTime = format(new Date(), "yyyy/MM/dd kk:mm:ss") ;
    console.log(props)
    const {todo, _id, date} = props
    return (
      <>
      <Wrapper>
        <div className="container"> 
          <h1>{todo}</h1>
          <small>Created on: {date}</small>
        </div>
        <button onClick={() => props.deleteTask(_id)}>
          <FaTrashAlt />
        </button>
        <button>
          <FaEdit className="edit" />
        </button>
      </Wrapper>
      
      </>
    );
}

export default Task