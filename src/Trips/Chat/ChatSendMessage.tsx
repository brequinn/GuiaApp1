import React, { useState, useEffect } from "react";
import {
  useFirestore,
  useUser,
} from "reactfire";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { Button, Input, message, Col } from "antd";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/app";
import { PlayCircleOutlined, SendOutlined } from "@ant-design/icons";
import { getFirestore, collection, query, where, getDocs, doc, setDoc, addDoc, updateDoc, serverTimestamp } from "firebase/firestore";

export function ChatSendMessage() {
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const [user1, setUser1] = useState<any>([]);
  const params = useParams<{tripid?: any}>();

  function addComment(e: { preventDefault: () => void; }) {
    const auth = getAuth();
    auth.onAuthStateChanged(async function(user) {
    // setUser1(user);
    console.log(JSON.stringify(user?.uid));
    const db = getFirestore();
      e.preventDefault();
      setLoading(true);
    const x = Date.now();
    await addDoc(collection(db, "trips", params.tripid, "comments"), {
        commentText: commentText,
        userID: user?.uid,
        photoURL: user?.photoURL,
        fullName: user?.displayName,
        createdOn: serverTimestamp(),
    });
  setLoading(false);
     console.log("ba", x - Date.now());

    setCommentText("");
  });
  }

  return (
    <>
      {loading }
      <Input
        onPressEnter={addComment}
        name="commentText"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
        placeholder="Write your message"
        style={{
          height: "100%",
          width: "calc(100% - 80px)",
          borderRadius: "0",
          backgroundColor: "#F0F0F0",
          border: "none",
          paddingLeft: 24,
        }}
      />
      <Button
        style={{
          width: "80px",
          height: "100%",
          backgroundColor: "#FFCC00",
          marginTop: 0,
          border: "none",
          borderRadius: "0",
        }}
        onClick={addComment}
      >
        <SendOutlined
          style={{
            color: "black",
            fontSize: "25px",
            marginTop: 5,
            marginLeft: 5,
          }}
        />
      </Button>
    </>
  );
}