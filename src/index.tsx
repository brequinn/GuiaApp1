
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { getAuth } from 'firebase/auth'; // Firebase v9+
import { getDatabase } from 'firebase/database'; // Firebase v9+
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from 'reactfire';
import 'antd/dist/antd.css';
// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import "antd/dist/antd.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
