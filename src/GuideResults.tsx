
import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { GuideCard } from "./GuideCard";
import { Header } from './Header';
import { FileAddOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";

export function GuideResults() {
const auth = getAuth();
  var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const history = useHistory();
const paramsTimeframe = useParams<{timeframe?: string}>();
const paramsLocation = useParams<{location?: string}>();

  async function getGuides() {
    const user = auth.currentUser;
    const db = getFirestore();
    const q = query(collection(db, "guides"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());

    
    setData(result);
   
  }
  const daDate = moment(paramsTimeframe.timeframe).format('MMMM Do YYYY, h:mm:ss a');

  useEffect(() => {
      getGuides();
      console.log("THIS IS THE LOCATION DID IT WORK?"  + (JSON.stringify(paramsLocation.location)));
      moment(paramsTimeframe.timeframe).format('MMMM Do YYYY, h:mm:ss a');
  }, []);

  return (  
    <>
    <Header />
    <h1>Showing guides for {paramsLocation.location} from {paramsTimeframe.timeframe} </h1>

{data1.map((guide: any) => (
        
        <GuideCard
          guide={guide}
          key={guide}
        />
      ))}   
    
    </>
  );
}

  export default GuideResults;