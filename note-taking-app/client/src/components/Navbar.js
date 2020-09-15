import React from "react"
import {Link} from "react-router-dom"

const Navbar = (props) => {
  const {logout, token} = props
    return (
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">

        

        <ul>
          {/* <li>
            <Link to="/">Auth</Link>
          </li> */}
          <li>
            {token && <Link to="/notes">Notes</Link>}
          </li>
          {token && <li onClick={logout}>Logout</li>}
        </ul>
      </nav>
    );
}
export default Navbar
