import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    height: 45px;
    background-color: #40514e;
    list-style: none;
    padding-top: 0.5em;
  }

  .nav {
    background: #40514e;
    filter: blur(.5px)
  }

  li {
    color: white;
    /* margin: 0 100%; */
    display: inline-block
  }
`;

const Nav = (props) => {


    const {logout, token} = props

    return (
      <Wrapper>
        <div className="nav">
          <ul>
            <li>Birdy</li>
            {token && (
                <li onClick={logout}>
                    <FontAwesomeIcon icon={faDoorClosed}/>
                </li>
                )}
          </ul>
        </div>
      </Wrapper>
    );
}

export default Nav