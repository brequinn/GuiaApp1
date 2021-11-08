import { Button, Dropdown } from 'antd';
import React, { useEffect, Component, useState } from "react";
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { GuideCard } from './GuideCard';
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";


export function GuideDetail() {
  const auth = getAuth();
  var user = auth.currentUser;
  const params = useParams<{guidename?: string}>();
  const [data1, setData] = useState<any>([]);
  const [guideName, setName] = useState<any>([]);

  
  async function getGuideDetail() {
    const db = getFirestore();
    const q = query(collection(db, "guides"), where(`IDtag`, `==`, params.guidename));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    // setName(doc.data().guideName);
    setData(result);
    console.log(JSON.stringify(result));
  }  

  useEffect(() => {
    getGuideDetail();
    console.log("printing the params " + params.guidename)
}, []);
  
  return (
      <>
       
              
        
       <Header />
      <div> 
            <h1   
            
        className="h1">  {data1.guideName}
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
  