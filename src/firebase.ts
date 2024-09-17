import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCZ8XDHIbJ_Fc_id7JWjybJ1VYcslja3RQ",
  authDomain: "discord-clone-82014.firebaseapp.com",
  projectId: "discord-clone-82014",
  storageBucket: "discord-clone-82014.appspot.com",
  messagingSenderId: "922734669544",
  appId: "1:922734669544:web:c1b0bc4e80902b9a76235d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, db};