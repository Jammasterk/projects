import React from "react"

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        errMsg,
        inputs:{
            username,
            password
        }
    } = props

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
            />
            <input 
            type="text"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            />
            <button>Submit</button>
            <p style={{color: "red"}}>
                {errMsg}
            </p>
        </form>
    )

}