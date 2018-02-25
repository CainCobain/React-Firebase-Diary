import * as firebase from 'firebase';
//import * as admin from 'firebase-admin';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSs0MEPynRi9nnh0fIBdjfSEeCi5gjcVI",
    authDomain: "diary-466a2.firebaseapp.com",
    databaseURL: "https://diary-466a2.firebaseio.com",
    projectId: "diary-466a2",
    storageBucket: "",
    messagingSenderId: "781426765366"
  };
  firebase.initializeApp(config);

  
  export const database = firebase.database().ref('/notes');
  
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();

