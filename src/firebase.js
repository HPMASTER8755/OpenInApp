import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth, OAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY2DvcJhDCG_7bYOnH1pyiDyvKiEMIu8s",
  authDomain: "openinapp-a0eff.firebaseapp.com",
  projectId: "openinapp-a0eff",
  storageBucket: "openinapp-a0eff.appspot.com",
  messagingSenderId: "345314184921",
  appId: "1:345314184921:web:4c95085ad96869a0f338c8",
  measurementId: "G-KY59ZYBV68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export {auth, googleProvider, appleProvider}