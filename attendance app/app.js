import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


const firebaseConfig = {
   apiKey: "AIzaSyArLCuTKEGnSt1HvOYFuWGQXmMPaMi0dRo",
   authDomain: "attendance-app-4a044.firebaseapp.com",
   projectId: "attendance-app-4a044",
   storageBucket: "attendance-app-4a044.appspot.com",
   messagingSenderId: "195119982424",
   appId: "1:195119982424:web:caa84ad68defa1e8f9672d",
   measurementId: "G-TFDMS3YHHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


const email = document.getElementById("email")
const password = document.getElementById("password")

function moveToAdmin() {
   signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         window.location.href = "dashboard/dashboard.html"
         swal({
            title: "Logged In!",
            text: "Successfully Logged In",
            icon: "success",
          });
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         swal({
            title: "Failed",
            text: "Incorrect Email or Password",
            icon: "error",
          });
      });

}




window.moveToAdmin = moveToAdmin;