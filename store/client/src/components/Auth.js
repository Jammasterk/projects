import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import {UserContext} from "../context/UserProvider"

const initInputs = {username: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const {toggle, setToggle} = useState(false)

    const {signUp, login, errMsg, resetAuthErr} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signUp(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }
    
    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return(
        <div>
            <h1>Handyman</h1>
            {!toggle ? (
                <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
                />
                </>
            )
            :
            (
                <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"
                errMsg={errMsg}
                />
                <h4 onClick={toggleForm}>Already A Member?</h4>
                </>
            )}
        </div>
    )
}


