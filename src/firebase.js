import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVs3_6mKz8zhcQ894YxZ5x_EJE0fsXZEk",
    authDomain: "axom-store.firebaseapp.com",
    projectId: "axom-store",
    storageBucket: "axom-store.appspot.com",
    messagingSenderId: "1004604063795",
    appId: "1:1004604063795:web:aa68562e6f804a3b712346",
    measurementId: "G-4Y3MQ7WBSB"
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };