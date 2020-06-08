import React from "react";

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input type="text" name="username" />
      <button>Search</button>
    </form>
  );
};

export default UserForm;
