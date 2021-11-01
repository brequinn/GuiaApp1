
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
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
        setData(data1);
        console.log("this is what was returned from the db " + data1);

  }


  useEffect(() => {
      getGuides();
  }, []);

  return (  
    <>
    <Header />
    <p onClick={clickGuideDetail}>profile</p>

{data1.map((guide: { id: any; }) => (
        <GuideCard
          guide={guide}
          key={guide.id}
        />
      ))}   
    </>
  );
}

  export default GuideResults;