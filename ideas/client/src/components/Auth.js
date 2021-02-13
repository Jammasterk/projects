import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";
import styled from "styled-components"

const initInputs = { email: "", password: "" };

const Wrapper = styled.div`
  p {
    position: absolute;
    margin-top: 560px;
    /* justify-content: center; */
    top: 0;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }

`;

const Auth = () => {
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
    <Wrapper>
      <div>
        {!toggle ? (
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up today"
              errMsg={errMsg}
            />
            <p
              onClick={toggleForm}
            >
              Already A member?
            </p>
          </>
        ) : (
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
            />
            <p href="" onClick={toggleForm}>
              Not yet a member?
            </p>
          </>
        )}
      </div>
    </Wrapper>
  );
};
export default Auth;
