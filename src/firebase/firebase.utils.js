import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBpIRHv4nUiUK8_0Pu-Pz25Gj_QBSmDGm4",
  authDomain: "e-commerce-dae3a.firebaseapp.com",
  projectId: "e-commerce-dae3a",
  storageBucket: "e-commerce-dae3a.appspot.com",
  messagingSenderId: "54214452796",
  appId: "1:54214452796:web:38779cfd5833cfa716c539",
  measurementId: "G-62HZ4BHT32",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
