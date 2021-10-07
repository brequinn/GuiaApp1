import React from "react";
import firebase from 'firebase/compat/app';
import { useAuth, useUser } from 'reactfire';
import { GoogleOutlined } from '@ant-design/icons';
import 'firebase/auth';
import 'firebase/firestore';
import "./css/Login.css";
import { Redirect } from 'react-router-dom';
 

export function Login() {
const auth = useAuth();
const user = useUser();


const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

function googleLogin() {
  auth.signInWithRedirect(googleProvider);
}

  return (
      <div>
            <h1 className="h1"> Login to Gather today!</h1> 
            <p className="descriptionText">Please continue with Google below to get started</p>

        <div className="getStartedButton">
          <button class="button Google Huge" className="getStartedButton" icon={<GoogleOutlined />} type="button" onClick={googleLogin}>
          Login With Google
          </button>
    </div>
        </div>

    );
  }