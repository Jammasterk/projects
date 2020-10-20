import React, {useState, useContext} from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBBadge, MDBBtn } from "mdbreact";
import styled from "styled-components"
import ContactForm from "./ContactForm"
import randomColor from "randomcolor"
import {UserContext} from "../context/UserProvider"

const Wrapper = styled.div`
  .socials {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 1em auto;
    margin-top: 2em;
  }

  .image {
    /* padding: 16px; */
    /* border-radius: 50%; */
    display: inline-block;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: ${randomColor}
  }

  .actionLinks {
    display: flex;
    justify-content: space-around;
    width: 25%;
    margin: 2em auto;
  }

  a {
    font-size: 28px;
    color: grey;
  }

  h3 {
    border-bottom: 1px solid grey;
    display: inline-block;
    padding-bottom: 0.75em;
  }

  h3,
  p {
  }

  .options {
    display: flex;
    width: 30%;
    justify-content: space-between;
  }

  .initial {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export default function Contact(props) {

    const {firstName, lastName, phone, email, twitter, facebook, instagram, _id, birthday} = props
    const [editToggle, setEditToggle] = useState(true)
    const [search, setSearch] = useState('')
    // const [filteredContact, setFilteredContact] = useState([])

    const {contacts} = useContext(UserContext)

    // console.log(randomColor)


    console.log(contacts)

    return (
      <>
        {editToggle ? (
          <>
            <Wrapper>
              <div>
                <MDBContainer className="mt-5 text-center">
                  <MDBRow>
                    <MDBCol>
                      <MDBJumbotron>
                        <div className="image mb-4 "></div>
                        <br />
                        <h3>
                          {firstName} {lastName}
                        </h3>
                        <p>{phone}</p>
                        <p>🎂 {birthday}</p>
                        {/* <p>Birthday: 04/28/1989</p> */}
                        <div className="actionLinks">
                          <a href={`tel:${phone}`}>
                            <i
                              style={{ color: "green" }}
                              className="fas fa-phone"
                            ></i>
                          </a>
                          <a href={`sms:${phone}`}>
                            <i
                              style={{ color: "green" }}
                              className="far fa-comment-alt"
                            ></i>
                          </a>
                        </div>
                        <div className="socials">
                          <a href={`mailto:${email}`}>
                            <i className="far fa-envelope"></i>
                          </a>
                          <a href={twitter} target="_blank">
                            <i
                              style={{ color: "#00acee" }}
                              className="fab fa-twitter"
                            ></i>
                          </a>
                          <a href={instagram} target="_blank">
                            <i
                              style={{ color: "#dd2a74" }}
                              className="fab fa-instagram"
                            ></i>
                          </a>
                          <a href={facebook} target="_blank">
                            <i
                              style={{ color: "#3b5998" }}
                              className="fab fa-facebook-f"
                            ></i>
                          </a>
                        </div>
                        <div className="m-auto options">
                          <MDBBadge
                            onClick={() =>
                              setEditToggle((prevToggle) => !prevToggle)
                            }
                            pill
                            color="warning"
                          >
                            Edit
                          </MDBBadge>
                          <MDBBadge
                            onClick={() => props.deleteContact(_id)}
                            pill
                            color="danger"
                          >
                            Delete
                          </MDBBadge>
                        </div>
                      </MDBJumbotron>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </Wrapper>
          </>
        ) : (
          <>
            <ContactForm
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              _id={_id}
              btnText="Submit edit"
              submit={props.updateContact}
            />
            <MDBBtn onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Close
            </MDBBtn>
          </>
        )}
      </>
    );
}
