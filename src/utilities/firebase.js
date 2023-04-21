// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, update, runTransaction, push, set, connectDatabaseEmulator } from "firebase/database";
import { useCallback, useEffect, useState } from "react";

import { v4 as uuid } from 'uuid';

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
  measurementId: "G-LJ9KCNJ9HG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

export const db = getDatabase(app);
// const analytics = getAnalytics(app);

// if (!windows.EMULATION && import.meta.env.NODE_ENV !== 'production') {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectDatabaseEmulator(database, "127.0.0.1", 9000);

//   // signInWithCredential(auth, GoogleAuthProvider.credential(
//   //   '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
//   // ));
  
//   // set flag to avoid connecting twice, e.g., because of an editor hot-reload
//   windows.EMULATION = true;
// }

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  useEffect(
    () =>
      onValue(
        ref(db, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );
  return [data, error];
};
const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

//pushes new data to firebase and returns its key

                // var test = {
                //   name: "Alex's Pizza Night 3",
                //   host: "Alex Tang",
                //   guests: 3,
                //   profile_pic_url:
                //     "https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?format=png&width=960",
                //   place: "828 Noyes",
                //   time: "April 25th",
                // };
                // pushDb(test, "Activities/");

export const pushDb = (data, path) => {
  const newPostKey = uuid().slice(0,8)
  // const updates = {};
  data.key = newPostKey;
  // var lastIndex = 1;
  // updates['/' + path + lastIndex] = data;
  // return update(ref(db), updates);

  var key = set(ref(db, path + newPostKey), data);
};


export const updateLikes = (postId, like) => {
  const postRef = ref(db, '/Recipes/' + postId);
  console.log('here', postRef)
  runTransaction(postRef, (post) => {
    if (post) {
      if(like){
        post.like_count++;
      }
      else{
        post.like_count--;
      }
    }
    return post;
  });
}

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );
  return [updateData, result];
};
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};
const firebaseSignOut = () => signOut(getAuth(firebase));
export { firebaseSignOut as signOut };
export const useAuthState = () => {
  const [user, setUser] = useState();
  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser));
  return [user];
};
