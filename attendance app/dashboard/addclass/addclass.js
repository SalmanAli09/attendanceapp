import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { setDoc, doc, getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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
const db = getFirestore(app);


// Add a new document in collection "user"

const addthisclass = document.getElementById("addthisclass");

// ===========> get every data form add class form


addthisclass.addEventListener('click', async () => {
    const hour = document.getElementById("classtime").value
    const shedule = document.getElementById("shedule").value
    const teachername = document.getElementById("teachername").value
    const section = document.getElementById("section").value
    const coursename = document.getElementById("coursename").value
    const batchnum = document.getElementById("batchnum").value

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "class"), {
        classtime: hour,
        shedule: shedule,
        teachername: teachername,
        section: section,
        coursename: coursename,
        batchnum: batchnum,
    });
    console.log("Document written with ID: ", docRef.id);
})


const backtohome = document.getElementById('backtohome');
backtohome.addEventListener('click', () => {
    window.location = "../../dashboard/dashboard.html"

})
