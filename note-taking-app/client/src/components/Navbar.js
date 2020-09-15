import React from "react"
import {Link} from "react-router-dom"

const Navbar = (props) => {
  const {logout} = props
    return (
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">

        

        <ul>
          <li>
            <Link to="/">Auth</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    );
}
export default Navbar
