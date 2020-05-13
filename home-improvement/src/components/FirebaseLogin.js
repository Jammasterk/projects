import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyD3dy7F60whd-AKqRJgOibfG9D-ddLRasI",
  authDomain: "overhere-ff434.firebaseapp.com",
});

class FirebaseLogin extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="container">
        <img
          src="https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="innerContainer">
          <div className="leftText">
            <h1>Home Improvement</h1>
            <p className="subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              voluptate iusto alias. Provident porro sapiente impedit magnam
              laboriosam tempore ullam.
            </p>
          </div>
          <div className="text">
            <h1>Home Improvement</h1>
          </div>
          <div className="login-widget">
            <h1 className="brandName">Home Improvement</h1>
            {this.state.isSignedIn ? (
              <div>Signed In</div>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FirebaseLogin;
