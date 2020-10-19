import React from "react"
import {Button, MDBInput} from "mdbreact"
import styled from "styled-components"

const Wrapper = styled.div`
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.4;
    z-index: 1;
  }

  form{
      z-index: 5;
      position: absolute;
      right: 0;
      padding: 1.5em;
      background: brown;
      opacity: .7;
      border-radius: .3em;
       top: 0
  }

  .btn {
    border-radius: 8px;
  }

  input {
    color: #fff !important;
  }

  .splash {
    background: url('https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh
  }
`;

function AuthForm(){
    return (
      <Wrapper>
        <div className="splash">
            <div className="overlay"></div>
        </div>
          <form className="w-25 m-auto">
            <h4>Login / signup</h4>
            <MDBInput label="Username" size="md" />
            <MDBInput label="Password" size="md" />
            <Button color="mdb-color">Press Me</Button>
          </form>
      </Wrapper>
    );
}

export default AuthForm