import React from 'react'
import {MDBInput, MDBBtn} from "mdbreact"
import SocialMedia from "../assets/social.png";
import styled from "styled-components"



const Wrapper = styled.div`
  form {
    width: 100%;
    display: inline-block !important;
    margin: auto !important;
    right: 0;
    background: #f8f8f8;
    padding: 3em;
  }
  .wrapper {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: auto;
    justify-content: space-evenly;
    margin: auto;
    /* margin-top: 2em; */
  }

  h4 {
    display: inline-block;
    margin-bottom: 2.5em;
  }

  h1 {
    display: inline-block;
    margin: 2em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #212529;
    width: 30%;
    font-size: 3.2vh;
    font-weight: bold
  }

  .inputs {
    width: 75%;
  }

  .inner-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100% */
    margin: 0 auto;
  }

  img {
    width: 100% !important;
  }
`;


export default function Authform(props) {


  const [show, setShow] = React.useState(false)

  const {handleChange, handleSubmit, btnText, errMsg, inputs: {
    username,
    password
  },
} = props


const toggleVisibility =() => {
  setShow(!show)
}

    return (
      <Wrapper>
        <h1>Birdy App</h1>
        <div className="wrapper">
          <img src={SocialMedia} alt="" className="w-50 mr-5" />

          <form onSubmit={handleSubmit}>
            <h4>Signup / Login</h4>
            <div className="inner-inputs">
              <MDBInput
                className="inputs"
                label="email / username"
                value={username}
                name="username"
                onChange={handleChange}
                autoComplete="off"
              />

              <MDBInput
                type={show === false ? "password" : "text"}
                className="inputs"
                label="password"
                value={password}
                name="password"
                onChange={handleChange}
                /* pattern=".{8,}" */
              />
              <div className="d-flex">
                <input onClick={toggleVisibility} type="checkbox" />
                <div className="ml-2 mr-2 d-flex w-25 justify-content-around">
                  {show === false ? (
                    <i className="fas fa-eye"></i>
                  ) : (
                    <i className="fas fa-eye-slash"></i>
                  )}
                  <p>password</p>
                </div>
              </div>
              <MDBBtn type="submit" outline color="blue-grey" className="w-50">
                {btnText}
              </MDBBtn>
              <p style={{ color: "red" }}>{errMsg}</p>
            </div>
          </form>
        </div>
      </Wrapper>
    );
}



