import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdFrmXoK2L6gBmkEpvjvDK1ygxCZz82Og",
    authDomain: "linkedin-clone-2e7a5.firebaseapp.com",
    projectId: "linkedin-clone-2e7a5",
    storageBucket: "linkedin-clone-2e7a5.appspot.com",
    messagingSenderId: "222900100760",
    appId: "1:222900100760:web:9333149be32dbb2a043aed"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };