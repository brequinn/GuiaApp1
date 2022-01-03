
import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { GuideCard } from "./GuideCard";
import { Header } from './Header';
import { FileAddOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export function GuideResults() {
const auth = getAuth();
var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const history = useHistory();
const paramsTimeframe = useParams<{timeframe?: any}>();
const paramsLocation = useParams<{location?: string}>();

  async function getGuides() {
    const user = auth.currentUser;
    const db = getFirestore();
    const q = query(collection(db, "guides"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());


    setData(result);
   
  }
  const daDate = dayjs(paramsTimeframe.timeframe.split(',')[0]).format("MMM DD")+ " to " +dayjs(paramsTimeframe.timeframe.split(',')[1]).format("MMM DD");

  useEffect(() => {
      getGuides();
      console.log("THIS IS THE LOCATION DID IT WORK?"  + (JSON.stringify(paramsLocation.location)));
      moment(paramsTimeframe.timeframe).format('MMMM Do YYYY, h:mm:ss a');
  }, []);

  return (  
    <>
    <Header />
    <div
      className='container'
      style={{
        maxWidth: 1140,
        width: "100%",
        margin: "auto"
      }}
      > 
    <h1>Showing guides for {paramsLocation.location} from {daDate} </h1>
    
    <Row gutter={16}
      style={{
        width: "100%",
        margin: "auto"
      }}
    >
{data1.map((guide: any) => (
        
        <GuideCard
          guide={guide}
          key={guide}
        />
      ))}   
    </Row>
        </div>
    </>
  );
  
}

  export default GuideResults;