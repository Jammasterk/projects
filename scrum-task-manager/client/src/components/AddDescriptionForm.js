import React, { useState } from "react";
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

  input {
    width: 250px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    padding: 0.25em;
    border: 1px solid black;
    margin: .25em 0
  }
`;

const AddDescriptionForm = (props) => {

    const initInputs = {description: "", assignedTo: "", due: "", teamLead: ""}

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
        props.addDescription(inputs)
        setInputs(initInputs) 
    }

    return (
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            placeholder="Task description"
          />
          <br />
          <input
            type="text"
            name="assignedTo"
            value={inputs.assignedTo}
            onChange={handleChange}
            placeholder="Assign task to..."
          />
          <br />
          <input
            type="date"
            name="due"
            value={inputs.due}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="teamLead"
            value={inputs.teamLead}
            onChange={handleChange}
            placeholder="Team leader"
          />
          <br />
          <button>Add Description</button>
        </form>
      </Wrapper>
    );
}

export default AddDescriptionForm