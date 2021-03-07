import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBHcleF1UxQ_2eR5yOoh6zpFH2ymYvZzPg",
    authDomain: "book-santa-51c46.firebaseapp.com",
    projectId: "book-santa-51c46",
    storageBucket: "book-santa-51c46.appspot.com",
    messagingSenderId: "501958923935",
    appId: "1:501958923935:web:e2b85e209173696c8934aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();