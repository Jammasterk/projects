import React from 'react'
import PropTypes from "prop-types"

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="user-item">
      <img
        src={avatar_url}
        style={{ borderRadius: "50%", width: 100, margin: "auto" }}
        alt=""
      />
      <h3>{login}</h3>
      <a href={html_url}>More</a>
    </div>
  );
};

UserItems.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItems
