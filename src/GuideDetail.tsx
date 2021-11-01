import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { GuideCard } from './GuideCard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";


export function GuideDetail() {
  const auth = getAuth();
  var user = auth.currentUser;

    return (
      <>
       <Header />
      <div> 
            <h1   
            
        className="h1">Tyler Greenfield profile!
        </h1>
        <p>Description</p>
        <p>I specialize in the following groups: Couples, solo travelers
           the following activites</p>
           <p>I specialize in the following activities : Jazz shows, cool cafes, museums, bike rides </p>
           <Button>
             Book your trip with Tyler
           </Button>
      </div>
      </>
    );
  }

  export default GuideDetail;