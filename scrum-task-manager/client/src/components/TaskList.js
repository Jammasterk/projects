import React from "react"
import Task from "./Task"
import styled from "styled-components"

const Wrapper = styled.div`
    .container{
        margin-left: 15%;
        width: 80%;
        margin-top: 8em
    }
`

export default function TaskList(props){
    const {task} = props
    return (
      <Wrapper>
        <div className="container">
          {task.map((todo) => (
            <Task {...todo} key={todo._id} />
          ))}
        </div>
      </Wrapper>
    );
}