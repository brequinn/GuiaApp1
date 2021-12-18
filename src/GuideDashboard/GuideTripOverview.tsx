import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import "../css/Home.css";
import { Header } from '../Header';
import { GuideTripCard } from './GuideTripCard';
import { useUser } from 'reactfire';
import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { FileAddOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";


export function GuideTripOverview() {
const auth = getAuth();
var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const history = useHistory();
const [user34, setUser34] = useState<any>([]);

 function getTrips() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
  const db = getFirestore();
  const q = query(collection(db, "trips"), where("guideID", "==", user.uid));
  const querySnapshot = await getDocs(q);
  const result = querySnapshot.docs.map(doc=> doc.data());
  setData(result);
  console.log(JSON.stringify(data1));
    }
});
}

useEffect(() => {
  auth.onAuthStateChanged(function(user) {
    getTrips();
  });
},[]);



    return (
      <>
       <Header />
      <div> 
            <h1   
            
        className="h1">My bookings as a guide
        
        </h1>
       
           
        <p className="descriptionText">

        {data1.map((guide: any) => (
         <GuideTripCard
         guide={guide}
         key={guide}
       />
     ))}   
        </p>
     
      </div>
      </>
    );
  }

  export default GuideTripOverview;