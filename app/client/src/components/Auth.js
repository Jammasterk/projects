import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider.js"
import styled from "styled-components"

const initInputs = {username: "", password: ""}

const Wrapper = styled.div`
  background: #e8ffe8;

  .toggle-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 125px !important;
    text-align: center;
    margin: 0 auto;
    margin-right: 19%;
    /* display: inline-block */
  }

  @media screen and (max-width: 660px) {
    .toggle-btn {
      position: absolute;
      bottom: 0 !important;
      margin-bottom: -140px !important;
      padding: 0 !important;
      margin-right: 19%;
      color: blue;
    }
  }
`;

function Auth(){
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
        setToggle((prev) => !prev)
        resetAuthErr()
    }

    return (
      <Wrapper>
        
          <div className="right-0">
            {!toggle ? (
              <>
                <AuthForm
                  handleChange={handleChange}
                  handleSubmit={handleSignup}
                  inputs={inputs}
                  btnText="Sign up"
                  errMsg={errMsg}
                />
                <p className="toggle-btn" onClick={toggleForm}>
                  Already A Member?
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
                <p className="toggle-btn" onClick={toggleForm}>
                  Not a member?
                </p>
              </>
            )}
          </div>
        
      </Wrapper>
    );
}

export default Auth



