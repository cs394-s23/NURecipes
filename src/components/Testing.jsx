import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

firebase.initializeApp({
    // Your Firebase app configuration
  });
  
  const storage = firebase.storage();
  const storageRef = storage.ref();

  const fileRef = storageRef.child('path/to/file.jpg');
fileRef.getDownloadURL().then((url) => {
  console.log(url);
}).catch((error) => {
  console.error(error);
});

fileRef.getDownloadURL().then((url) => {
  const img = new Image();
  img.src = url;
  document.body.appendChild(img);
}).catch((error) => {
  console.error(error);
});

const Testing = () => {

  return (
    <h1>Hello World</h1>
  );
}

export default Testing;