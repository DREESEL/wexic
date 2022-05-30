// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBFxkGOyuw6Vc51QeMv-KEFNfrGj8enYwI",
    authDomain: "wexic-845a7.firebaseapp.com",
    projectId: "wexic-845a7",
    storageBucket: "wexic-845a7.appspot.com",
    messagingSenderId: "577923129450",
    appId: "1:577923129450:web:c1b6651bc9e83cb0c0ea13",
    measurementId: "G-KGLHYF5DN5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }

