import React from 'react'
import styled from "styled-components"
import woman from "../assets/food-pic.jpg"

const Wrapper = styled.div`
  .container {
    background: url(${woman});
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* position: relative */
  }

  .overlay {
    /* position: relative; */
    height: 100vh;
    width: 100vw;
    background: #dee1ec;
    opacity: 0.3;
    z-index: 1;
  }
  .overlay {
  }

  .inner-container {
    position: absolute;
    z-index: 3;
    display: inline-block;
    top: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-align: center;
    color: #f5f5f5;
    font-size: 42px;
  }
  input {
    border: none;
    background: none !important;
    border-bottom: 1px solid #f5f5f5;
  }

  label {
    color: #f5f5f5;
    font-family: "Poppins", sans-serif;
  }

  input:focus {
    border: none;
    background: none;
  }

  input,
  button {
    /* margin: 0.5em 0; */
    width: 100%;
    height: 35px;
  }

  button {
    background: none;
    border: 1px solid #fff;
    color: #fff;
    margin-top: 3em;
  }
`;

export default function AuthForm(props) {

  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { email, password },
  } = props;


    return (
      <Wrapper>
        <div className="container">
          <div className="overlay"></div>
          <form className="inner-container" onSubmit={handleSubmit}>
            <h1>Foodstagram</h1>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                onChange={handleChange}
                name="email"
                value={email}
              />
              <label for="last_name">Email</label>
            </div>
            <br />
            <div class="input-field col s6">
              <input
                id="last_name"
                type="password"
                class="validate"
                onChange={handleChange}
                name="password"
                value={password}
              />
              <label for="last_name">Password</label>
            </div>
            <button type="submit">{btnText}</button>
          </form>
          <p>{errMsg}</p>
        </div>
      </Wrapper>
    );
}
