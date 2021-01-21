import React from "react"

const AdminForm =  (props) => {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username, password
        }
    } = props

    return(
       <form onSubmit={handleSubmit}>
           <input type="text" value={username} name="username" onChange={handleChange} />
           <input type="password" value={password} name="password" onChange={handleChange}/>
           <button>{btnText}</button>
           <p>{errMsg}</p>
       </form>
    )
}

export default AdminForm