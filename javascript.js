// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv5D1Z3qcTbJruT9-KylBpp_CcwckT-Ms",
  authDomain: "book-club-mgmy.firebaseapp.com",
  projectId: "book-club-mgmy",
  storageBucket: "book-club-mgmy.firebasestorage.app",
  messagingSenderId: "1068088634273",
  appId: "1:1068088634273:web:e6976ab3bb2629af22f9e0",
  measurementId: "G-MCW321R5KY"
};

const app = initializeApp(firebaseConfig);

const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit').value;
submit.addEventListner("click", function (event) {
event.preventDefault()
alert(5)
})