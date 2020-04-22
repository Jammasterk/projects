import React from "react"

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        errMsg,
        inputs : {
            username,
            password
        }
    } = props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="loginInputs">
          <input
            className="logins"
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="logins"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button>Submit</button>
        <p className="check" style={{ color: "red" }}>
          {errMsg}
        </p>
      </form>
    );
}

