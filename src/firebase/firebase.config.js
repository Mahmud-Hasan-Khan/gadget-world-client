// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXWyz3paz-0z9pr_W8qtw3IWIOzJKisds",
    authDomain: "gadget-world-b1b2a.firebaseapp.com",
    projectId: "gadget-world-b1b2a",
    storageBucket: "gadget-world-b1b2a.appspot.com",
    messagingSenderId: "393964218942",
    appId: "1:393964218942:web:8a4cbcdf9023dbfb5a7f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;