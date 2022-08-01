import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyA_iX13t8tCzjShAHEwm53_BZcdoAiHWjk",
  authDomain: "dts-final-projects.firebaseapp.com",
  projectId: "dts-final-projects",
  storageBucket: "dts-final-projects.appspot.com",
  messagingSenderId: "491792002714",
  appId: "1:491792002714:web:fc715d236f2c550e7f7923",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
