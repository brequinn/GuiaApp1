import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { ChatSendMessage } from "././ChatSendMessage";
import { Comment } from "././Comment";
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, orderBy} from "firebase/firestore";
import 'firebase/firestore';
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { Button, Input, message, Col } from "antd";
import "../../css/sticky.css";
import { PlayCircleOutlined, SendOutlined } from "@ant-design/icons";
import { AnyARecord } from "dns";



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
    console.log("getComments trip ids " + JSON.stringify(params.tripid))
    const db = getFirestore();
    const q = query(collection(db, "trips", params.tripid, "comments"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    console.log("these are the result comments" + JSON.stringify(result));
    setData(result);
    console.log("these are the comments" + JSON.stringify(data1));
  }

//   function getComments() {
//     const db = firebase.firestore();
//     db.collection("channels")
//       .doc(params.channelid)
//       .collection("comments")
//       .orderBy("createdOn", "asc")
//       .onSnapshot((querySnapshot) => {
//         const data = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setData(data);
//       });
//   }

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