import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    const {logout} = props
    return(
        <ul>
            <li>
                <Link to="/profile">
                Profile
                </Link>
            </li>
            <li>
                <a href="#" onClick={logout}>Logout</a>
            </li>
        </ul>
    )
}