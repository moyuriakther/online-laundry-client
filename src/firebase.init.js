// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuIvQF6qczemEu9HrRUHPqOSfoQXwp6DM",
  authDomain: "online-laundry-system1.firebaseapp.com",
  projectId: "online-laundry-system1",
  storageBucket: "online-laundry-system1.appspot.com",
  messagingSenderId: "383011027905",
  appId: "1:383011027905:web:d9cc7aef3aa5be0f1b4d40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
