import React from "react";
import { initializeApp } from 'firebase/app';
import "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaJRpXaWgB1pyvwosvvNBq6CUBPXXMOOs",
  authDomain: "newscaster-56421.firebaseapp.com",
  projectId: "newscaster-56421",
  storageBucket: "newscaster-56421.appspot.com",
  messagingSenderId: "401859916532",
  appId: "1:401859916532:web:899f45f233d5811bf064a1",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };