import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import Navbar from "./Navbar"
import styled from "styled-components"

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

  h1,
  p {
    text-align: center;
    font-family: "Prompt", sans-serif;
  }
  h1 {
    margin-top: 1em;
  }
`;


const FormPage = (props) => {
  const {
    handleChange,
    handleSubmit,
    errMsg,
    btnText,
    inputs: { 
      username, 
      password 
    }
  } = props;

  return (
    <>
      <Navbar />
      <Wrapper>
        <MDBContainer>
          <div className="title">
            <h1>Tech Flash</h1>
            <p>Tech content delivered to you daily.</p>
          </div>
          <MDBJumbotron>
            <MDBRow>
              <MDBCol md="6">
                <form onSubmit={handleSubmit}>
                  <p className="h5 text-center mb-4">Signup or Login</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your username"
                      icon="user"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      value={password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-outline-elegant w-50 rounded-pill waves-effect"
                      type="submit"
                    >
                      {btnText}
                    </button>
                  </div>
                  <p>{errMsg}</p>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBJumbotron>
        </MDBContainer>
      </Wrapper>
      {/* <form onSubmit={handleSubmit}>
        <div className="loginInputs">
          <input
            className="logins"
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="logins"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button>Submit</button>
        <p className="check" style={{ color: "red" }}>
          {errMsg}
        </p>
      </form> */}
    </>
  );
    // const {
    //   handleChange,
    //   handleSubmit,
    //   errMsg,
    //   inputs: { username, password },
    // } = props;

    // return (
    //   <form onSubmit={handleSubmit}>
    //     <div className="loginInputs">
    //       <input
    //         className="logins"
    //         type="text"
    //         value={username}
    //         name="username"
    //         onChange={handleChange}
    //         placeholder="Username"
    //       />
    //       <input
    //         className="logins"
    //         type="password"
    //         value={password}
    //         name="password"
    //         onChange={handleChange}
    //         placeholder="Password"
    //       />
    //     </div>
    //     <button>Submit</button>
    //     <p className="check" style={{ color: "red" }}>
    //       {errMsg}
    //     </p>
    //   </form>
    // );
};

export default FormPage;
