import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
    .toggle{
        position: absolute;
        right: 0;
        /* bottom: 0 */
        margin-top: 400px;
        border: none;
        background: transparent;
        display: flex;
        justify-content: center;
        margin-right: 50px
        
    }
`

const initInputs = { username: "", password: "" };

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs);
    const [toggle, setToggle] = useState(false);
    const { signup, login } = useContext(UserContext);

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

            function toggleForm(){
                setToggle(prev => !prev)
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
              />
              <button className="toggle" onClick={toggleForm}>Login</button>
            </>
          ) : (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
              />
              <button className="toggle" onClick={toggleForm}>Not a member? Sign up</button>
            </>
          )}
        </div>
      </Wrapper>
    );
}