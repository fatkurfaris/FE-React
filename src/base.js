import * as firebase from "firebase/app";
import "firebase/storage";


//dibagian ini ya temen2 di ganti settingannya kalian, ada satu lagi di firebasenya bagian file firebase.json sama dengan firebase storage rules
const firebaseConfig = {
  apiKey: "AIzaSyDTIkrh_9ODViXpCQ5wRvXnzOh6HgVDXHs",
  authDomain: "testing-7a76d.firebaseapp.com",
  projectId: "testing-7a76d",
  storageBucket: "testing-7a76d.appspot.com",
  messagingSenderId: "354415053398",
  appId: "1:354415053398:web:1ec3ae1fe8ef45977009f7",
  measurementId: "G-E5L20VEK5X"
};

export const app = firebase.initializeApp(firebaseConfig);