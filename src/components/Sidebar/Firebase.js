import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import {firestore} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAeM9W2RJ7e2sPc8Krq1rkul-3HUGCpUZk",
    authDomain: "whatsapp-clone-1b119.firebaseapp.com",
    projectId: "whatsapp-clone-1b119",
    storageBucket: "whatsapp-clone-1b119.appspot.com",
    messagingSenderId: "475700348464",
    appId: "1:475700348464:web:5fff49a0b633e629d50ff5",
    measurementId: "G-412JP28K1Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
