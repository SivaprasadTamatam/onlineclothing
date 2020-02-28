import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArP0r6sCFHjjpzZ9FWZIW32YpF0l_Diyc",
  authDomain: "cloths-db-2f5e7.firebaseapp.com",
  databaseURL: "https://cloths-db-2f5e7.firebaseio.com",
  projectId: "cloths-db-2f5e7",
  storageBucket: "cloths-db-2f5e7.appspot.com",
  messagingSenderId: "58658582412",
  appId: "1:58658582412:web:3756b928ccbed693f6f0a9",
  measurementId: "G-WVGZ08LM8F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
