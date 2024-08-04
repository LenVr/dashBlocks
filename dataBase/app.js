
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzlsT2RxPTYiGaCdAwd-vWR0gEgNI84Vw",
    authDomain: "dashblocks-ec9be.firebaseapp.com",
    projectId: "dashblocks-ec9be",
    storageBucket: "dashblocks-ec9be.appspot.com",
    messagingSenderId: "14411474986",
    appId: "1:14411474986:web:9b69d4ef2344701caf7b53",
    measurementId: "G-QR44MR4781"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)