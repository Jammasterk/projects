import React, {useState, useContext} from "react"
import AdminForm from "./AdminForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  p {
    font-family: "Poppins", sans-serif;
    cursor: pointer
  }
`;

const initInputs = {username: "", password: ""}

const Admin = () => {
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
          {!toggle ? (
            <>
              {/* */}
              <AdminForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login to admin portal"
                errMsg={errMsg}
              />
              <p style={{ textAlign: "center" }} onClick={toggleForm}>
                Request Access
              </p>
            </>
          ) : (
            <>
              <AdminForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Request Admin Access"
                errMsg={errMsg}
              />
              <p style={{ textAlign: "center" }} onClick={toggleForm}>
                Already have access
              </p>
            </>
          )}
        </div>
      </Wrapper>
    );
}

export default Admin