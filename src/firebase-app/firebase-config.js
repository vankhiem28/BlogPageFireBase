import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC4BC3dzIIw4I48Ls3vQUslJGKFXDoh44",
  authDomain: "page-blogging.firebaseapp.com",
  projectId: "page-blogging",
  storageBucket: "page-blogging.appspot.com",
  messagingSenderId: "535344928911",
  appId: "1:535344928911:web:ff65db97d355dd73fef8fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
