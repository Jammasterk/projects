import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    const {logout} = props
    return(
        <>
        <Link to="/profile">Profile</Link>
        <button onClick={logout}></button>
        </>
    )
}