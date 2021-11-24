import React, { useState, useEffect } from "react";
import "./css/Header.css";
import "./css/index.css";
import firebase from 'firebase/compat/app';
import { Avatar, Dropdown, Menu, Space, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useAuth, useUser } from "reactfire";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { getFirestore, collection, query, where, doc, addDoc, setDoc, updateDoc} from "firebase/firestore";

export function Header() {
const auth = useAuth();
const [user34, setUser34] = useState<any>([]);

  
//  auth.onAuthStateChanged(function(user) {
//     if (user != null) {
//       // addUser();
//       console.log("user should be created in firebase now, check it")
//     } else {
//       console.log(JSON.stringify(user));
//     }
//   });

  useEffect(() => {
    auth.onAuthStateChanged( async function(user) {
    setUser34(user);
    addUser();
  });
      });
    

  const firebaseConfig = {
    apiKey: "AIzaSyCNjEmxNEcqTfytXFkogstdxxKP_rejONs",
    authDomain: "guiaapp-9c636.firebaseapp.com",
    projectId: "guiaapp-9c636",
    storageBucket: "guiaapp-9c636.appspot.com",
    messagingSenderId: "932046445247",
    appId: "1:932046445247:web:7c820a6d040f53ebc0c40a"
  };

const firebaseApp = initializeApp(firebaseConfig);
const authInstance = getAuth(firebaseApp);

   function googleLogin() {
    auth.onAuthStateChanged(function(user) {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope("profile");
  googleProvider.addScope("email");
    const auth = getAuth();
  signInWithRedirect(auth, googleProvider)
  .then((result) => {
    console.log("so this does work");
    const credential = GoogleAuthProvider.credentialFromResult(result) as firebase.auth.OAuthCredential; 
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result;
      }
      ); 
      console.log("so this does work");
    });
     console.log("so this does work");
    }

  async function addUser(){
    auth.onAuthStateChanged( async function(user) {
      setUser34(user);
      const db = getFirestore();
          await setDoc(doc(db, "users", user34.uid), 
         {
          uid: user34.uid,
          email: user34.email,
          name: user34.displayName,
          photoURL: user34.photoURL
        }); 
        console.log("addUser function has fired")
      });
    }


    function Logout() {
      auth.onAuthStateChanged(function(user) {
      auth.signOut();
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
      <Link to="/MyTrips">
        <Space direction="horizontal" size="middle">
          <span
            
            style={{
             
            color: '#599B67',
             fontSize: "35px",
              marginRight: 20,
              marginLeft: 50,
            
            }}
          >
            My Trips
          </span>
        </Space>
      </Link>

      { user34 ?
        <div style={{ marginLeft: "auto" }}>
          <Space direction="horizontal" size="middle">
            <Dropdown
              trigger={["click"]}
              overlayStyle={{ paddingTop: 16, marginLeft: -100 }}
              overlay={
                <Menu>
                  <Menu.Item>
                   Account information
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
                  <a onClick={Logout}>Logout</a>
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
       :
       
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
}
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

