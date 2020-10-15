import React from 'react'
import {Form, Button} from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div`
  .btn-secondary {
    background: #a696c8;
    border: none
  }

  h1{
      text-align: center
  }
`;

export default function ProfileForm() {
    return (
      <Wrapper>
        <div>
            <h1>Write a note</h1>
          <Form className="w-75 mx-auto mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Control className="w-100" type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Add note" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="w-100"
                type="text"
                placeholder="Image / optional"
              />
            </Form.Group>
            <Button variant="secondary" size="xl" className="w-50">
              Add Note
            </Button>
          </Form>
        </div>
      </Wrapper>
    );
}
