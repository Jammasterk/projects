import React from "react"
import Task from "./Task"

export default function TaskList(props){
    const {tasks} = props
    return(
        <div>
            {tasks.map(task => <Task {...task} key={task._id}/>)}
        </div>
    )
}