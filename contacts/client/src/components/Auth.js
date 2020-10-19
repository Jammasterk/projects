import React, {useState, useContext} from "react"
import AuthForm from "./Authform"
import {UserContext} from "../context/UserProvider"

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
        setToggle((prev) => !prev)
        resetAuthErr()
    }

    return(
        <div>
            {!toggle ? (
                <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Signup"
                    errMsg={errMsg}
                 />
                 <p onClick={toggleForm}>Already A member?</p>
                </>
            )
                :
            (
                <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    errMsg={errMsg}
                 />
                 <p onClick={toggleForm}>Note a member?</p>
                </>
            )}
        </div>
    )
}