
import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { GuideCard } from "./GuideCard";
import { Header } from './Header';
import { FileAddOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { useHistory } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";

export function GuideResults() {
const auth = getAuth();
  var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const history = useHistory();
  const clickGuideDetail = () => history.push('/guideDetail');


  async function getGuides() {
    const user = auth.currentUser;
    const db = getFirestore();
    const q = query(collection(db, "guides"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc => doc.data());
    setData(result);
  
        console.log("this is what was returned from the db " + result);

  }


  useEffect(() => {
      getGuides();
  }, []);

  return (  
    <>
    <Header />

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