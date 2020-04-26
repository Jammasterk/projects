import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDZH14uIkynpCynuOH6FBcLMoYz-ZPyCSs",
  authDomain: "test-project-e9a1a.firebaseapp.com",
  databaseURL: "https://test-project-e9a1a.firebaseio.com",
  projectId: "test-project-e9a1a",
  storageBucket: "test-project-e9a1a.appspot.com",
  messagingSenderId: "372820163555",
  appId: "1:372820163555:web:cd7881f6a1fa3667bebed6",
  measurementId: "G-1LGPDW3QCL",
};


const fire = firebase.initializeApp(config);
firebase.analytics();

// const fire = firebase.initializeApp(config);

export default fire;
