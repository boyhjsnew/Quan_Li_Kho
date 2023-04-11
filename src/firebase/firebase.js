import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxyTFzmnLC-RGPtsu_FarhcOah3fduKgk",
  authDomain: "quanlykho-d78bb.firebaseapp.com",
  projectId: "quanlykho-d78bb",
  storageBucket: "quanlykho-d78bb.appspot.com",
  messagingSenderId: "553918935788",
  appId: "1:553918935788:web:40c1cb5630c03f1d7cabc9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
