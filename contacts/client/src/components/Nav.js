import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap");

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    height: 60px;
    background-color: #40514e;
    list-style: none;
    padding-top: 0.5em;
  }

  .nav {
    background: #40514e;
    filter: blur(0.5px);
  }

  li {
    color: white;
    font-size: 30px;
    display: inline-block;
    font-family: "Source Code Pro", monospace;
  }
`;

const Nav = (props) => {


    const {logout, token} = props

    return (
      <Wrapper>
        <div className="nav">
          <ul>
            <li>Birdy App</li>
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