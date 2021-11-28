import React, { useState, useEffect } from "react";
import {
  useFirestore,
  useUser,
} from "reactfire";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { Button, Input, message, Col } from "antd";
import firebase from "firebase/app";
import { PlayCircleOutlined, SendOutlined } from "@ant-design/icons";

export function ChatSendMessage() {
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const params = useParams();


  async function addComment() {
    // const db = useFirestore();
    // e.preventDefault();
    // setLoading(true);
    // var user = firebase.auth().currentUser;
    // const x = Date.now();
    // console.log("a");
    // await db
    //   .collection("channels")
    //   .doc(params.channelid)
    //   .collection("comments")
    //   .add({
    //     commentText,
    //     createdOn: firebase.firestore.FieldValue.serverTimestamp(),
    //     userID: user.uid,
    //     photoURL: user.photoURL,
    //     fullName: user.displayName,
    //   });
    // setLoading(false);
    // console.log("ba", x - Date.now());

    // setCommentText("");
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