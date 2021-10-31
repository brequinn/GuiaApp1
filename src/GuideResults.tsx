
import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import { GuideCard } from "./GuideCard";
import { FileAddOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";

export function GuideResults() {
const auth = getAuth();
  var user = auth.currentUser;
const [data1, setData] = useState<any>([]);


  async function getGuides() {
    const user = auth.currentUser;
    const db = getFirestore();
    const q = query(collection(db, "guides"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
        setData(data1);
        console.log("these are the guide of state working " + data1);

  }


  useEffect(() => {
    // firebase.auth().onAuthStateChanged(function (user) {
      getGuides();
    // });
  }, []);

  return (  
    <>
      {data1.map((guide) => (
        <GuideCard
          guide={guide}
          key={guide.id}
        />
      ))}
    </>
  );
}

  export default GuideResults;