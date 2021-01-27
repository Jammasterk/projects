import React from "react"
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Description = (props) => {
    const {created, description, assignedTo, due, teamLead, _id} = props
    return (
      <div>
        <h6>{description}</h6>
        <small>{created}</small>
        <p>{assignedTo}</p>
        <p>{due}</p>
        <p>{teamLead}</p>
        <button onClick={() => props.deleteDescription(_id)}>
          <FaTrashAlt />
        </button>
        <button>
          <FaEdit className="edit" />
        </button>
      </div>
    );
}

export default Description