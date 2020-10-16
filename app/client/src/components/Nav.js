import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
    li{
        font-size: 25px;
        list-style: none
    }
`

const Nav = (props) => {

    const {logout, token} = props

    function door(){
        return 
    }

   

    

    return (
      <Wrapper>
        <div>
          <ul>
              <li>
                  {token && <Link to="/notes">Notes</Link>}
              </li>
            {token && (
              <li onClick={logout}>
                <FontAwesomeIcon icon={faDoorOpen} />
              </li>
            )}
          </ul>
        </div>
      </Wrapper>
    );
}

export default Nav