import React, {useContext} from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"
import Task from "./Task"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  h1 {
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 48px;
  }
`;

export default function Profile(){
    const {
      user: { username },
      addTask,
      task
    } = useContext(UserContext);

    return (
      <Wrapper>
        <div className="container">
          <h1>Hello {username}</h1>
          <AddTaskForm addTask={addTask} />
          <h1>Your Boards</h1>
          <TaskList task={task} />
        </div>
      </Wrapper>
    );
}