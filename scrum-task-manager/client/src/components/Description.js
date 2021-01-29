import React from "react"
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import styled from "styled-components"

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
    margin-top: 100px;
    margin-left: 20% !important;
    position: fixed;
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

  button {
    border: none;
    background: none;
  }

  .edit {
    color: #278ea5;
  }
`;

const Description = (props) => {
    const {created, description, assignedTo, due, teamLead, _id} = props
    return (
      <Wrapper>
        <div className="container">
          <h6>Task description: {description}</h6>
          <small> Date created: {created}</small>
          <p>Assigned to: {assignedTo}</p>
          <p>Due date: {due}</p>
          <p>Team leader: {teamLead}</p>
          <button onClick={() => props.deleteDescription(_id)}>
            <FaTrashAlt />
          </button>
          <button>
            <FaEdit className="edit" />
          </button>
        </div>
      </Wrapper>
    );
}

export default Description