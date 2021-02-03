import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {
    const {logout} = props
    return (
        <div>
            <ul>
                <li>
                   <Link to="/profile">
                   Profile
                   </Link> 
                </li>
                <li>
                    <Link to="/public">Public</Link>
                </li>
                <li>
                    <a href="#" onClick={logout}>Logout</a>
                </li>
            </ul>
        </div>
    )
}
