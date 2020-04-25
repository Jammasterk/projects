import React from "react";
import fire from "../config/fire";

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

    //   render() {
    //     return (
    //       <div>
    //         <div>
    //           <div id="email">
    //             <label>Email</label>
    //             <input id="email" placeholder="enter email..." type="text" />
    //           </div>
    //         </div>
    //         <div id="password">
    //           <label>Password</label>
    //           <input
    //             id="password"
    //             placeholder="enter password..."
    //             type="text"
    //           />
    //         </div>
    //         <button onClick={this.login}>Login</button>
    //         <button onClick={this.signUp}>Signup</button>
    //       </div>
    //     );
    //   }
    // }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text" />
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text" />
        </div>
        <button style={{ margin: "10px" }} onClick={this.login}>
          Login
        </button>
        <button style={{ margin: "10px" }} onClick={this.signUp}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default Login;


