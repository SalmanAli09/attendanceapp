import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { setDoc, doc, getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";




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
const storage = getStorage()

// =========> taking all values

const name = document.getElementById("name")
const fname = document.getElementById("fname")
const rollno = document.getElementById("rollno")
const phoneno = document.getElementById("phoneno")
const cnic = document.getElementById("cnic")
const img = document.getElementById("img")
const coursename = document.getElementById("coursename")
const assigncourse = document.getElementById("assignCourse").value
const addstudentbutton = document.getElementById("addstudentbutton")


coursename.addEventListener('change', async () => {
    const q = query(collection(db, "class"), where("coursename", "==", coursename.value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        assigncourse.innerHTML += `<option>${doc.data().coursename}</option>`
        console.log(doc.id, " => ", doc.data());
    });
    console.log(coursename.value)

})
addstudentbutton.addEventListener('click', async () => {
    // const img = document.getElementById("img")
    const imageHere = imageToURL(img.files[0])
    const name = document.getElementById("name")
    const fname = document.getElementById("fname")
    const rollno = document.getElementById("rollno")
    const phoneno = document.getElementById("phoneno")
    const cnic = document.getElementById("cnic")
    const coursename = document.getElementById("coursename")
    const assigncourse = document.getElementById("assignCourse")
    const docRef = await addDoc(collection(db, "students"), {
        name: name.value,
        fathername: fname.value,
        rollno: rollno.value,
        phoneno: phoneno.value,
        cnic: cnic.value,
        coursename: coursename.value,
        assigncourse: assigncourse.value,
        picture: imageHere
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(imageToURL)

})

const imageToURL = (file) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, 'images/profiles.png');
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                });
            }
        );
    })
}






const backtohome = document.getElementById("backtohome");
backtohome.addEventListener('click', () => {
    window.location = "../../dashboard/dashboard.html"
})


