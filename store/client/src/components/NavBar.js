import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props){
   
    const {logout} = props
    return (
      <div className="navbar">
        <div className="links">
          <Link className="bars" to="/profile">
            Profile
          </Link>
          <Link className="bars" to="public">
            Public
          </Link>
        </div>
        <button  className="loginOut" onClick={logout}>Logout</button>
      </div>
    );          
}



