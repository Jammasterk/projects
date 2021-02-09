import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  .toggle-btn {
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;
    right: 0;
    top: 0;
    margin-top: 450px;
    z-index: 4;
    width: 450px;
    text-align: start;
    padding-left: 20px;
    color: #e5e4e2;
  }
  .toggle-btn:focus {
    outline: none;
  }
`;

const initInputs = { email: "", password: "" }; 

export default function Auth(){
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
        <div>
          {toggle ? (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
              />
              <button className="toggle-btn" onClick={toggleForm}>Not a member?</button>
            </>
          ) : (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Signup"
                errMsg={errMsg}
              />
              <button className="toggle-btn" onClick={toggleForm}>Already a member?</button>
            </>
          )}
        </div>
      </Wrapper>
    );
}