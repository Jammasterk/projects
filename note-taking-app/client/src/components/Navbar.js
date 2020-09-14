import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
    <nav>
      <ul>
        <li>
            <Link to="/">Auth</Link>
        </li>
        <li>
            <Link to="/notes">Notes</Link>
        </li>
        {/* <li>
            <Link to="/account">Account</Link>
        </li> */}
      </ul>
    </nav>
    )
}
export default Navbar
