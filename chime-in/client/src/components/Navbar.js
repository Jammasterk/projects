import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    const {logout, token} = props
    return(
        <ul>
            <li>
                {token && <Link to="/user">
                Account
                </Link>}
            </li>
            <li>
                <a href="#" onClick={logout}>Logout</a>
            </li>
        </ul>
    )
}