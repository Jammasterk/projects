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
    border: none
  }

  h1{
      text-align: center
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
            <Button type="submit" variant="secondary" size="xl" className="w-50">
              Add Note
            </Button>
          </Form>
        </div>
      </Wrapper>
    );
}
