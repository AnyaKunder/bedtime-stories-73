import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCeFs_kYTWFuYN1qLSi1Qo_T1YOPwOPjvY",
    authDomain: "project-73-b2e13.firebaseapp.com",
    projectId: "project-73-b2e13",
    storageBucket: "project-73-b2e13.appspot.com",
    messagingSenderId: "407679153895",
    appId: "1:407679153895:web:4b5b1664f321878563d442"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore