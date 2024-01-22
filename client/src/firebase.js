// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO2YBUGmPQV_JmKQfc4TxzEnAEzQT6rMM",
    authDomain: "react-app-cn.firebaseapp.com",
    databaseURL: "https://react-app-cn-default-rtdb.firebaseio.com",
    projectId: "react-app-cn",
    storageBucket: "react-app-cn.appspot.com",
    messagingSenderId: "922375980082",
    appId: "1:922375980082:web:36d2ed54230a462271e82b",
    measurementId: "G-RK4V0JSSG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



