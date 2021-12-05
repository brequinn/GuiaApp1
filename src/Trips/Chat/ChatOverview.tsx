import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { ChatSendMessage } from "././ChatSendMessage";
import { Comment } from "././Comment";
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, orderBy, onSnapshot, CollectionReference, doc, collectionGroup} from "firebase/firestore";
import 'firebase/firestore';
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { Button, Input, message, Col } from "antd";
import "../../css/sticky.css";
import { PlayCircleOutlined, SendOutlined } from "@ant-design/icons";
import { AnyARecord } from "dns";
import { orderByChild } from "firebase/database";



var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

export function ChatOverview() {
const paramsTripID = useParams<{tripid?: any}>();
const auth = getAuth();
var user = auth.currentUser;
const [data1, setData] = useState<any>([]);

  useEffect(() => {
    getComments();
    console.log("these are the comments" + JSON.stringify(data1));
    // return () => {};
  }, []);

  const params = useParams<{tripid?: any}>();

  async function getComments() {
    const db = getFirestore();
// const q = query(collectionRef, orderBy("timestamp", "desc"));  
  const collectionRef = collection(db, "trips", params.tripid, "comments"); 
    const q = query(collectionRef, orderBy("createdOn", "asc"));
    onSnapshot(q, (snapshot) => {
    const result = (snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setData(result);
  })
    
  }

  return (
    <>
      <div
        style={{  
          paddingBottom: "160px",
        }}
      >
        <h1
          style={{
            color: "white",
            marginTop: 20,
          }}
        >
          Chat
        </h1>

        {data1.map((comment: { id: string | number | null | undefined; }) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  );
}