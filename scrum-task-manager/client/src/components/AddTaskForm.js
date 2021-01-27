import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  button {
    font-size: 1.2em;
    padding: 0.15em 0.25em;
    width: 258px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    border: none;
    background: #278ea5;
    color: #f5f5f5;
  }
  textarea {
    resize: none;
    width: 250px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    padding: 0.25em;
  }
`;

const AddTaskForm = (props) => {

    const initInputs = {todo: ""}

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addTask(inputs)
        setInputs(initInputs)
    }

    return (
      <Wrapper>
        <form action="" onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="todo"
            value={inputs.todo}
            onChange={handleChange}
            placeholder="Task"
            rows="4"
            
          />
        <br/>
          <button>Add Task</button>
        </form>
      </Wrapper>
    );
}

export default AddTaskForm