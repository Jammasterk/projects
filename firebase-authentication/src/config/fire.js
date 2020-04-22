import firebase from "firebase"

 var firebaseConfig = {
   apiKey: "AIzaSyD3dy7F60whd-AKqRJgOibfG9D-ddLRasI",
   authDomain: "overhere-ff434.firebaseapp.com",
   databaseURL: "https://overhere-ff434.firebaseio.com",
   projectId: "overhere-ff434",
   storageBucket: "overhere-ff434.appspot.com",
   messagingSenderId: "784798561184",
   appId: "1:784798561184:web:e24ac1aedba8ae0214aac5",
   measurementId: "G-1TPKGKPF5H"
 };

 const fire = firebase.initializeApp(firebaseConfig)

 export default fire
