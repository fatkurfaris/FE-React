import * as firebase from "firebase/app";
import "firebase/storage";


//dibagian ini ya temen2 di ganti settingannya kalian, ada satu lagi di firebasenya bagian file firebase.json sama dengan firebase storage rules
const firebaseConfig = {
  apiKey: "",
  authDomain: "upload-file-306ad.firebaseapp.com",
  projectId: "upload-file-306ad",
  storageBucket: "upload-file-306ad.appspot.com",
  messagingSenderId: "915413354747",
  appId: "1:915413354747:web:81ef7fc9426fe1baebc85e",
  measurementId: "G-GCTXD9X27N",
};

export const app = firebase.initializeApp(firebaseConfig);