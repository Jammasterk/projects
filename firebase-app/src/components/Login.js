import React from "react";
import fire from "../config/fire";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { TextField, Button} from "@material-ui/core";

class Login extends React.Component {

    // state={
    //     isSignedIn: false
    // }
    // uiConfig = {
    //     signInFlow: "popup",
    //     signInOptions: [
    //         fire.auth.GoogleAuthProvider.PROVIDER_ID,
    //         fire.auth.GithubAuthProvider.PROVIDER_ID,
    //         fire.auth.GoogleAuthProvider.PROVIDER_ID
    //     ],
    //     callbacks: {
    //         signInSuccess: () => false
    //     }
    // }

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
      <div className="wrapper">
          <h1 className="title">Bubble Up</h1>
        <div style={{ textAlign: "center" }} className="form">
          <div className="inner-form">
            <div className="email-margin">Email</div>
            {/* <input id="email" placeholder="Enter Email.." type="text" /> */}
            <TextField
              required
              id="email"
              label="Username"
              type="text"
              placeholder="Enter email"
              className="input-bottom"
            />
          </div>
          <div>
            <br />
            <div>Password</div>
            {/* <input id="password" placeholder="Enter Password.." type="text" /> */}
            <TextField
              required
              id="password"
              label="Password"
              type="text"
              placeholder="Enter email"
              className="input-bottom2"
            />
          </div>
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={this.login}
            className="button2"
          >
            Login
          </Button>
          <br />
          <br/>
          <h6>Not a member? Signup here.</h6>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.signUp}
            className="button"
          >
            Signup
          </Button>
          <p>{this.login.message}</p>
        </div>
      </div>
    );
  }
}

export default Login;


