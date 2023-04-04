// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app’s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVn-I3orTJDJtPqbeTNaydXKsvUPELN9k",
  authDomain: "nurecipes-1da9d.firebaseapp.com",
  databaseURL: "https://nurecipes-1da9d-default-rtdb.firebaseio.com",
  projectId: "nurecipes-1da9d",
  storageBucket: "nurecipes-1da9d.appspot.com",
  messagingSenderId: "286546175820",
  appId: "1:286546175820:web:10adf363242a8b9a2091e9",
  measurementId: "G-LJ9KCNJ9HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    console.log(data)
    useEffect(() => (
      onValue(ref(db, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
    return [ data, error ];
  };
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
    return [updateData, result];
  };
  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  const firebaseSignOut = () => signOut(getAuth(firebase));
  export { firebaseSignOut as signOut };
  export const useAuthState = () => {
    const [user, setUser] = useState();
    useEffect(() => (
      onAuthStateChanged(getAuth(firebase), setUser)
    ));
    return [user];
  };