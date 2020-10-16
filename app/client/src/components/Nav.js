import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
    li{
        font-size: 25px;
        list-style: none;
        color: #107a8b
    }
    ul{
        display: flex;
        justify-content: space-around;
        background: #88d498;
        box-shadow: 0 6px 4px -2px #f0f0f0;
        height: 45px;
        padding: 0;
        margin: 0
    }
`

const Nav = (props) => {

    const {logout, token} = props

    return (
      <Wrapper>
        <div>
          <ul>
              <li>
                  {token && <li>Robust</li>}
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