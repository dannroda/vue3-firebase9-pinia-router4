// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe6DoZ9pd0Rd4Ph7SjYzMXZPokjPJVrkY",
    authDomain: "fir-app-vue.firebaseapp.com",
    projectId: "fir-app-vue",
    storageBucket: "fir-app-vue.appspot.com",
    messagingSenderId: "16299609863",
    appId: "1:16299609863:web:8d0493b664285853953fa2",
    measurementId: "G-LK55WTYL0K"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth()
const db = getFirestore()
export { auth, db }