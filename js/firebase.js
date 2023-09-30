import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBE3ltkzL6L_aDyHna9bez8aHzJ4Y0XEQo",
    authDomain: "kintsugidash.firebaseapp.com",
    projectId: "kintsugidash",
    storageBucket: "kintsugidash.appspot.com",
    messagingSenderId: "179551275898",
    appId: "1:179551275898:web:69207b16bc87c3816624c3",
    measurementId: "G-XQ7VRYDW6C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);