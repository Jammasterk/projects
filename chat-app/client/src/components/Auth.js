import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
    .submit-btn{
        background: transparent;
        border: none;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 75px
    }
`

const initInputs = {username: "", password: ""}

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
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"
                errMsg={errMsg}
              />
              <button className="submit-btn" onClick={toggleForm}>
                Already A Member? Login now!
              </button>
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
              <button className="submit-btn" onClick={toggleForm}>
                Not a member yet? Signup now!
              </button>
            </>
          )}
        </div>
      </Wrapper>
    );
}