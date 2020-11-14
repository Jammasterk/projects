import React from "react"
import { MDBJumbotron, MDBContainer, MDBInput, MDBBtn } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
  form {
    height: 550px;
    width: 400px;
    /* border: 1px solid black; */
    border-radius: 5px;
    box-shadow: 5px 5px 16px -7px #000000;
    background: url("https://images.pexels.com/photos/5275010/pexels-photo-5275010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-position: center;
    background-size: cover
  }
  .controls {
    /* position: absolute;
    margin: auto; */
  }

  h1{
      color: white;
      text-align: center
  }

  input{
      background: transparent
  }
`;

const AuthForm = () => {
    return (
      <Wrapper>
        <div>
          <MDBJumbotron fluid>
            <MDBContainer>
              <form action="">
                <h1>Login / signup</h1>
                <div className="controls mx-auto w-75">
                  <MDBInput className="w-100 my-5" type="text" />
                  <MDBInput className="w-100 m-5" type="password" name="" id="" />
                  <MDBBtn className="w-100" type="submit">
                    Signup
                  </MDBBtn>
                </div>
              </form>
            </MDBContainer>
          </MDBJumbotron>
        </div>
      </Wrapper>
    );
}


export default AuthForm