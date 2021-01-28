import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaEdit, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Wrapper = styled.div`
  .container {
    /* border: 1px solid black; */
    display: inline-block;
    padding: 1em;
    border-radius: 1em;
    margin: 0.33em;
    width: 250px;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    margin-top: 2em;
  }
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 16px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 12px;
  }

  small {
    font-family: "Poppins", sans-serif;
    font-size: 8px;
  }

  svg {
    font-size: 24px;
    color: #f85959;
  }

  .twitter {
    color: #1da1f2;
    margin: 0 .15em
  }

  .linkedIn {
    color: #0077b5;
    margin: 0 .15em
  }

  .github {
    color: #333333;
    margin: 0 .15em
  }

  button {
    border: none;
    background: none;
  }

  .edit {
    color: #278ea5;
  }
`;

const User = (props) => {
    const {name, company, role, bio, twitter, linkedIn, github, _id} = props

    return (
      <Wrapper>
        <div className="container">
          <h6>Name: {name}</h6>
          <p>Company: {company}</p>
          <p>Role: {role}</p>
          <p>Bio: {bio}</p>
          <a href={twitter}>
            <FaTwitter className="twitter" />
          </a>
          <a href={linkedIn}>
            <FaLinkedin className="linkedIn" />
          </a>
          <a href={github}>
            <FaGithub className="github" />
          </a>
          <br/>
          <button onClick={() => props.deleteUser(_id)}>
            <FaTrashAlt />
          </button>
          <button>
            <FaEdit className="edit" />
          </button>
        </div>
      </Wrapper>
    );
}

export default User