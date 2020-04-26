import React from "react";
import fire from "../config/fire";
import { TextField, Button } from "@material-ui/core";

class Login extends React.Component {
  login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Login Successful");
      })

      .catch((error) => {
        console.log(error);
      });
  }

  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signed Up");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <div>Email</div>
          {/* <input id="email" placeholder="Enter Email.." type="text" /> */}
          <TextField
            required
            id="email"
            label="Required"
            type="text"
            placeholder="Enter email"
          />
        </div>
        <div>
          <div>Password</div>
          {/* <input id="password" placeholder="Enter Password.." type="text" /> */}
          <TextField
            required
            id="password"
            label="Required"
            type="text"
            placeholder="Enter email"
          />
        </div>
        <Button variant="outlined" color="primary" onClick={this.login}>
          Login
        </Button>
        <Button variant="outlined" color="primary" onClick={this.signUp}>
          Signup
        </Button>
      </div>
    );
  }
}

export default Login;


