
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { getAuth } from 'firebase/auth'; // Firebase v9+
import { getDatabase } from 'firebase/database'; // Firebase v9+
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from 'reactfire';
import 'antd/dist/antd.css';
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCNjEmxNEcqTfytXFkogstdxxKP_rejONs",
  authDomain: "guiaapp-9c636.firebaseapp.com",
  projectId: "guiaapp-9c636",
  storageBucket: "guiaapp-9c636.appspot.com",
  messagingSenderId: "932046445247",
  appId: "1:932046445247:web:7c820a6d040f53ebc0c40a"
};


ReactDOM.render(
 
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
