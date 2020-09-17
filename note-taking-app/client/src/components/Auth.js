import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import styled from "styled-components"
import {UserContext} from "../context/UserProvider"

const Wrapper = styled.div`
    h1{
        /* margin-left: 2em */
        text-align: center;
        font-size: 32px;
        width: 90%;
        margin: auto !important
    }
    p{
      display: inline-block !important;
      position: absolute;
      right: 0;
      top:0;
      margin-right: 150px;
      margin-top: 38%;
      cursor: pointer
    }
`

const initInputs = {username: "" , password: ""}

const Auth = () => {

        const [inputs, setInputs] = useState(initInputs)
        const [toggle, setToggle] = useState(false)

        const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

        function handleChange(e) {
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
      <div>
        <Wrapper>
          <h1>Organize your life</h1>
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
                style={{ color: "#000 !important" }}
                href=""
                onClick={toggleForm }
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
        </Wrapper>
      </div>
    );
}
export default Auth