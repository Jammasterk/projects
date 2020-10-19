import React from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBBadge } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
    .socials{
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 1em auto;
        margin-top: 2em
    }

    .image{
        /* padding: 16px; */
        background: lightblue;
        /* border-radius: 50%; */
        display: inline-block;
        width: 72px;
        height: 72px;
        border-radius: 50%

    }

    .actionLinks{
        display: flex;
        justify-content: space-around;
        width: 25%;
        margin: 2em auto;

    }

    a{
        font-size: 28px;
        color: grey
    }

    h3{
        border-bottom: 1px solid grey;
        display: inline-block;
        padding-bottom: .75em
    }

    h3, p{

    }

    .options{
        display: flex;
        width: 30%;
        justify-content: space-between
    }
`

export default function Contact() {
    return (
      <Wrapper>
        <div>
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <img
                    src="https://images.pexels.com/photos/4598490/pexels-photo-4598490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="image mb-4 "
                  ></img>
                  <br />
                  <h3>Jared Manwaring</h3>
                  <p>Phone: 555555555</p>
                  <p>Birthday: 04/28/1989</p>
                  <div className="actionLinks">
                    <a href="">
                      <i style={{ color: "green" }} class="fas fa-phone"></i>
                    </a>
                    <a href="">
                      <i
                        style={{ color: "green" }}
                        class="far fa-comment-alt"
                      ></i>
                    </a>
                  </div>
                  <div className="socials">
                    <a href="">
                      <i class="far fa-envelope"></i>
                    </a>
                    <a href="">
                      <i
                        style={{ color: "#00acee" }}
                        class="fab fa-twitter"
                      ></i>
                    </a>
                    <a href="">
                      <i
                        style={{ color: "#dd2a74" }}
                        class="fab fa-instagram"
                      ></i>
                    </a>
                    <a href="">
                      <i
                        style={{ color: "#3b5998" }}
                        class="fab fa-facebook-f"
                      ></i>
                    </a>
                  </div>
                  <div className="m-auto options">
                    <MDBBadge pill color="warning">
                      Edit
                    </MDBBadge>
                    <MDBBadge pill color="danger">
                      Delete
                    </MDBBadge>
                  </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </Wrapper>
    );
}
