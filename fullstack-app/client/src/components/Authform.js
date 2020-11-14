import React from "react"

function AuthForm(props){


    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {username, password}
    } = props

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} name="username" onChange={handleChange}/>
                <input type="password" name="password" value={password} onChange={handleChange}/>
                <button>{btnText}</button>
                <p>{errMsg}</p>
            </form>
        </div>
    )
}

export default AuthForm