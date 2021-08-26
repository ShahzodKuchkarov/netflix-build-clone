import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9KL1uEBiv95ecMOA-o2x0B7-7I-Cx57E",
    authDomain: "netflix-build-clone-cc6a8.firebaseapp.com",
    projectId: "netflix-build-clone-cc6a8",
    storageBucket: "netflix-build-clone-cc6a8.appspot.com",
    messagingSenderId: "582916786841",
    appId: "1:582916786841:web:8e2dd9174a12e1ab950608"
};

const firebaseAPp = firebase.initializeApp(firebaseConfig);
const db = firebaseAPp.firestore();
const auth = firebase.auth();

export { auth }

export default db