import React, {useState} from 'react'
import { MDBJumbotron, MDBBtn, MDBBadge, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
    svg, path{
        width: 32px
    }
    small{
        width: 100vw
    }
`

export default function ContactForm() {

    const [state, setState] = useState(false)

    function toggleChange(e){
        e.preventDefault(setState(!state))}

        function addIcon(){
            return (
              <Wrapper>
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-plus-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </Wrapper>
            );
        }

        function subIcon(){
            return (
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-dash-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                />
              </svg>
            );
        }

    return (
      <div>
        <div className="container">
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <h1>Save a contact</h1>
                  <form action="">
                    <MDBInput label="First name" />
                    <MDBInput label="Last name" />
                    <MDBInput label="Phone" />
                    <div
                      style={state ? { display: "block" } : { display: "none" }}
                    >
                      <MDBInput type="date" label="Birthday" />
                      <MDBInput label="Email" />
                      <MDBInput label="Twitter" />
                      <MDBInput label="Instagram" />
                      <MDBInput label="Facebook" />
                      <MDBInput type="file" />
                    </div>
                    <MDBBadge
                      className="px-3"
                      /* color="success" */
                      onClick={toggleChange}
                      pill
                      color="mdb-color"
                    >
                      <small>{state ? "less" : 'more'} options</small>
                      
                    </MDBBadge>

                    <br />
                    <MDBBtn outline className="mt-3" color="mdb-color" rounded>
                      Add contact
                    </MDBBtn>
                  </form>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
} 
