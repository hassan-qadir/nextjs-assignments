// firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGI9m8cZtpyRHAWRIcaB1w3nIrROwSLio",
  authDomain: "assignment-b21da.firebaseapp.com",
  projectId: "assignment-b21da",
  storageBucket: "assignment-b21da.appspot.com",
  messagingSenderId: "99149225369",
  appId: "1:99149225369:web:dc0c63822702aaa7cc4708",
  measurementId: "G-N3QQPHR1XQ",
};
console.log(firebase);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export default db;
