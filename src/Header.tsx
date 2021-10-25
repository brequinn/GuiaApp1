import React, { useState, useEffect } from "react";
import "./css/Header.css";
import "./css/index.css";
import firebase from 'firebase/compat/app';
import { Avatar, Dropdown, Menu, Space, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useAuth } from "reactfire";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const googleProvider = new firebase.auth.GoogleAuthProvider();


export function Header() {
  const auth = useAuth();

  function googleLogin() {
    const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope("profile");
  googleProvider.addScope("email");
    const auth = getAuth();
signInWithPopup(auth, googleProvider)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result) as firebase.auth.OAuthCredential; 
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
      });
    }
  
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#191919",
        display: "flex",
        position: "sticky",
        top: 0,
        padding: "0 32px 0 32px",
        alignItems: "center",
        gridRow: "1",
        gridColumn: "1 / -1",
        borderBottom: "1px solid #2D2D2D",
        // zIndex: "+999",
      }}
    >
      {/* <Logo /> */}
      <Link to="/">
        <Space direction="horizontal" size="middle">
          <span
            
            style={{
             
            color: '#599B67',
             fontSize: "35px",
              marginRight: 20,
              marginLeft: 50,
            
            }}
          >
            Guia 
          </span>
        </Space>
      </Link>


        <div style={{ marginLeft: "auto" }}>
          <Space direction="horizontal" size="middle">
            <Dropdown
              trigger={["click"]}
              overlayStyle={{ paddingTop: 16, marginLeft: -100 }}
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to={"/accountinformation"}>Account information</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="www.bbc.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Become a guide
                    </a>
                  </Menu.Item> 

                  <Menu.Item>
                    <a>Logout</a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a>
                <Space>
                  <Photo />
                  <DownOutlined style={{ color: "#eee" }} />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </div>
  
       <Button
          type="primary"
          size="large"
          style={{
            marginBottom: 16,
            marginRight: -1200,
            top: 8,
            borderRadius: 200,
            marginLeft: "auto",
            color: "white",
            border: "none",
            padding: "8px 28px",
            backgroundColor: "#599B67",
          }}
        >
          Become a guide
        </Button>
        <Button
          onClick={googleLogin}
          type="primary"
          size="large"
          style={{
            marginBottom: 16,
            marginRight: 8,
            top: 8,
            borderRadius: 200,
            marginLeft: "auto",
            color: "white",
            border: "none",
            padding: "8px 28px",
            backgroundColor: "#599B67",
          }}
        >
          Login
        </Button>
      )
    </div>
  );
}

function Photo() {
  const { currentUser } = useAuth();

  if (!currentUser || !currentUser.photoURL) {
    return <UserOutlined />;
    console.log(currentUser);
  }
  return <Avatar src={currentUser.photoURL}></Avatar>;
}