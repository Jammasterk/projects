import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import styled from "styled-components"
import {UserContext} from "../context/UserProvider"

const Wrapper = styled.div`
    h1{
        margin-left: 2em
    }
`

const initInputs = {username: "" , password: ""}

const Auth = () => {

        const [inputs, setInputs] = useState(initInputs)
        const [toggle, setToggle] = useState(false)

        const {signup, login} = useContext(UserContext)

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
              />
              <p
                style={{ color: "#000 !important" }}
                href=""
                onClick={() => setToggle((prev) => !prev)}
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
              />
              <p href="" onClick={() => setToggle((prev) => !prev)}>
                Not yet a member?
              </p>
            </>
          )}
        </Wrapper>
      </div>
    );
}
export default Auth