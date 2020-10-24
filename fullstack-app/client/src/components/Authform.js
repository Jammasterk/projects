import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .container {
    min-height: 100vh;
    width: 100%;
    background: #4592af;
  }
  form {
    background: #4592af;
    border-radius: 5px;
    box-shadow: 9.91px 9.91px 15px #3f859f, -9.91px -9.91px 15px #4b9fbf;
    width: 60%;
    height: 400px;
    margin: auto;
    padding: 1em;
  }
  input {
    width: 90%;
    background: transparent;
    margin: 2em auto;
    height: 35px;
    border: none;
    background: #4592af;
    box-shadow: 9.91px 9.91px 15px #3f859f, -9.91px -9.91px 15px #4b9fbf;
    padding-left: 1em;
    font-size: 16px;
  }

  input::placeholder {
    color: #f5f5f5;
    font-family: "Source Code Pro", monospace;
  }

  button {
    color: #f5f5f5;
    width: 50%;
    height: 35px;
    border: none;
    background: #4592af;
    box-shadow: 9.91px 9.91px 15px #3f859f, -9.91px -9.91px 15px #4b9fbf;
    margin-top: 1em;
    font-size: 16px;
    font-weight: 200;
  }

  h4 {
    color: #f5f5f5;
  }
`;

const Authform = () => {
    return (
      <Wrapper>
        <div className="container">
          small
          <form action="">
              <h4>Login</h4>
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password"/>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Wrapper>
    );
}

export default Authform