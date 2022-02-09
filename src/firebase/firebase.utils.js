// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4tHX5x11QdygxlwxUwiSwhy8GtJv7OUA",
  authDomain: "crwn-db-9a872.firebaseapp.com",
  projectId: "crwn-db-9a872",
  storageBucket: "crwn-db-9a872.appspot.com",
  messagingSenderId: "671339283731",
  appId: "1:671339283731:web:615813dfdd91ff7924c6e6",
  measurementId: "G-CR5CVCPG9K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, addditionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapshot = await userRef.get();
  if(!userSnapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addditionalData
      })
    } catch (error) {
      console.log('error creating user',error.message)
    }
  }
  return userRef;
}

export default firebase;