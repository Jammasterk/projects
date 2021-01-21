import React, {useState, useContext} from "react"
import AdminForm from "./AdminForm"
import {UserContext} from "../context/UserProvider"

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
    return(
        <div>
            {!toggle ? (
                <>
                    <AdminForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Request Admin Access"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Already have access</p>
                </>
            )
                :
                (
                <>
                    <AdminForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login to admin portal"
                    />
                    <p onClick={toggleForm}>Request Access</p>
                </>
            )}
        </div>
    )
}

export default Admin