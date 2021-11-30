import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCIG80VnN2oanmakLCezUmA1wihPZvdgMg",
  authDomain: "union-fecbe.firebaseapp.com",
  projectId: "union-fecbe",
  storageBucket: "union-fecbe.appspot.com",
  messagingSenderId: "1004627026863",
  appId: "1:1004627026863:web:76cb13622b68c020db855a",
});

export default app;
