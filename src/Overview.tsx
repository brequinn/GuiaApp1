import { Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import { useAuth } from "reactfire";
import firebase from "firebase/compat/app";
import "./css/Home.css";

export function Overview() {
    const auth = useAuth();
    var user = firebase.auth().currentUser;

    function Logout() {
        auth.signOut();
        // history.push("/login");
      }

    return (
      <div>
            <h1 className="h1">Welcome to Guia!</h1>
        
        <p className="descriptionText">
         The better way to travel. Travel more, plan less!
        </p>
        
       <div className="getStartedButton">
       <Link to="/login">
      <Button onClick={Logout}>
    <span>Log out</span>
  </Button>
</Link> 
        </div>
      </div>
    );
  }

  export default Overview;