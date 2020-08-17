import React, { useState, useContext } from "react";
import FormPage from "./FormPage.js";
import { UserContext } from "../context/UserProvider.js";
import styled from "styled-components"

const initInputs = { username: "", password: "" };

    const Wrapper = styled.div`
        h4{
            text-align: center
        }
    `
export default function Auth() {


  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthErr();
  }

  return (
    <div className="loginScreen">
      <Wrapper>
        {!toggle ? (
          <>
            <FormPage
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
            />
            <h4 className="check" onClick={toggleForm}>
              Not a member?
            </h4>
          </>
        ) : (
          <>
            <FormPage
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up"
              errMsg={errMsg}
            />
            <h4 className="check" onClick={toggleForm}>
              Already a member?
            </h4>
          </>
        )}
      </Wrapper>
    </div>
  );
}
