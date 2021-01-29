import React, {useState, useContext} from 'react'
import AuthForm from "./AuthForm"
import styled from "styled-components"
import {UserContext} from "../context/UserProvider.js"

const Wrapper = styled.div`
  .submit-btn {
    position: absolute;
    top: 0;
    display: block;
    /* margin: 0 auto; */
    left: 50%;
    margin-top: min(485px);
    margin-left: -150px;
    width: 300px;
    font-family: "Poppins", sans-serif;
    background: transparent;
    border: none;
    font-size: 16px;
    color: #f5f5f5
  }

  .submit-btn:focus{
    outline: none;
    cursor: pointer
  }
`;

const initInputs = {username: "", password: ""}

export default function Auth() {

    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

   function toggleForm(){
     setToggle(prev => !prev)
     resetAuthErr()
   }
    
    return (
      <Wrapper>
        <div style={{width: "100vw"}}>
          {toggle ? (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"
                errMsg={errMsg}
              />
              <button className="submit-btn" onClick={toggleForm}>Already A Member? Login now!</button>
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
              <button className="submit-btn" onClick={toggleForm}>Not a member yet? Signup now!</button>
            </>
          )}
        </div>
      </Wrapper>
    );
}
