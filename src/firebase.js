// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7f89OLSgVHlcCg6rRYaiw-xPbAN8PSj8",
    authDomain: "react-auth-tutorial-cd861.firebaseapp.com",
    projectId: "react-auth-tutorial-cd861",
    storageBucket: "react-auth-tutorial-cd861.appspot.com",
    messagingSenderId: "795577512384",
    appId: "1:795577512384:web:0912848263a6b8def29825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};
