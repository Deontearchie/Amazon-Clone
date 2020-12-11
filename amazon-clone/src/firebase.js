import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBN2OaxXfgElkiCiqnBCuMapFQ7oQaPyh0",
    authDomain: "clone-c2351.firebaseapp.com",
    databaseURL: "https://clone-c2351.firebaseio.com",
    projectId: "clone-c2351",
    storageBucket: "clone-c2351.appspot.com",
    messagingSenderId: "390932383105",
    appId: "1:390932383105:web:ff74e861f72b92e1415480",
    measurementId: "G-T47856RRLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };