import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <div>
            <ul>
                <li>
                <Link to="/">Beer</Link>
                </li>
                <li>
                    <Link to="/liquor">Liquor</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav

