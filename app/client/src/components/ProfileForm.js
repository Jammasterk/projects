import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"
import styled from "styled-components"

const initInputs = {
  title: "",
  note: "",
  img: ""
}

const Wrapper = styled.div`
  .btn-secondary {
    background: #a696c8;
    border: none;
    display: inline-block
  }

  h1{
      text-align: center;
      font-weight: 200
  }
`;

export default function ProfileForm(props) {
  const [inputs, setInputs] = useState(initInputs)
  const {addNote} = props

  function handleChange(e){
    const {name, value} = e.target

    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addNote(inputs)
    setInputs(initInputs)
  }

  function plusBtn(){
    return (
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        class="bi bi-plus"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    );
  }

  const {title, note, img} = inputs

    return (
      <Wrapper>
        <div>
            <h1>Write a note</h1>
          <Form className="w-75 mx-auto mt-5" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control 
              className="w-100" 
              type="text"
              name="title"
              value={title} 
              placeholder="Title"
              onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control 
              as="textarea" 
              rows={3}
              name="note"
              value={note} 
              placeholder="Add note"
              onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="w-100"
                type="text"
                name="img"
                value={img}
                placeholder="Image / optional"
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="secondary" size="xl" >
              {plusBtn()}
            </Button>
          </Form>
        </div>
      </Wrapper>
    );
}
