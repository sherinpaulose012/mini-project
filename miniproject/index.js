 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDqR0gdQMmtaJkSt0gwJPI7AkDLJyfWzMg",
   authDomain: "restuarant-menu-ed391.firebaseapp.com",
   projectId: "restuarant-menu-ed391",
   storageBucket: "restuarant-menu-ed391.firebasestorage.app",
   messagingSenderId: "207904489753",
   appId: "1:207904489753:web:d622a6280c23de8c910588",
   measurementId: "G-7L1QY77Z57"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);