import React, { useState, useEffect } from "react";
import { useAuth } from "reactfire";
import { Link, useParams } from "react-router-dom";
import { Menu, Dropdown, Button, message } from "antd";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import "firebase/firestore";
import Profile from "../../images/default-avatar-1.png";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import dayjs from 'dayjs';
import { UserOutlined, SendOutlined, MoreOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";
import styles from "./Comment.module.scss";

export function Comment( {comment} : {comment:any}) {
const [userName, setuserName] = useState("");
const [user1, setUser1] = useState<any>([]);
const [photoURL, setuserURL] = useState("");
const { currentUser } = useAuth();
const params = useParams();
const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged( function(user) {
    setUser1(user);
    setuserName(user1.displayName);
    var testString = userName;
    var testArray = testString.split("");
    setuserURL(user1.photoURL);
    return () => {};
});
  }, []);

  function deleteComment() {
    // const db = getFirestore();
    // db.collection("channels")
    //   .doc(params.channelid)
    //   .collection("comments")
    //   .doc(comment.id)
    //   .delete()
    //   .then(() => {
    //     message.success("Comment deleted!");
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting comment: ", error);
    //   });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={deleteComment} href="javascript:void(0)">
          Delete
        </a>
      </Menu.Item>
    </Menu>
  );

  if (!currentUser) {
    return null;
  }

  return (
    <div
      className={currentUser.uid === comment.userID ? "mycomment" : ""}
      style={{ marginTop: 40 }}
    >
      <img
        src={comment.photoURL ? comment.photoURL : Profile}
        style={{
          height: "35px",
          width: "35px",
          display: "inline-block",
          borderRadius: "200px",
          position: "absolute",
        }}
      />
      <div
        className={styles.container}
        style={{
          display: "inline-block",
          marginLeft: 48,
        }}
      >
        <span
          className="commentbg"
          style={{
            color: "black",
            fontSize: "14px",
            borderRadius: "0px 24px 24px 24px",
            padding: "12px 20px",
            maxWidth: "calc(100vw - 70px - 140px)",
            backgroundColor: "#000",
            display: "inline-block",
          }}
        >
          <span
            className="username"
            style={{
              color: "white",
            //   fontWeight: "600",
              display: "block",
            }}
          >
            {comment.fullName}
          </span>
          <span
            style={{
              color: "white",
              display: "block",
            }}
          >
            {comment.commentText}
          </span>
        </span>
        {currentUser.uid === comment.userID && (
          <Dropdown overlay={menu} placement="bottomRight">
            <Button
              type="primary"
              shape="circle"
              icon={<MoreOutlined />}
              style={{
                position: "absolute",
                marginLeft: 8,
                backgroundColor: "#000",
                border: "none",
              }}
            />
          </Dropdown>
        )}
      </div>
      <h3
        style={{
          color: "#4e4e4e",
          position: "absolute",
          right: "0",
          fontSize: "13px",
          marginTop: "-22.5px",
          marginRight: "24px",
        }}
      >
        {/* {new dayjs(comment.createdOn * 1000).format("MMMM DD, HH:mm")} */}
      </h3>
    </div>
  );
}