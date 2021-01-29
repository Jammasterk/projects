import React, {useContext} from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"
import Task from "./Task"
import {UserContext} from "../context/UserProvider"

export default function Profile(){
    const {
      user: { username },
      addTask,
    } = useContext(UserContext);

    return (
      <div>
        <h1>Hello {username}</h1>
        <AddTaskForm addTask={addTask} />
        <h1>Your Boards</h1>
        <TaskList />
      </div>
    );
}