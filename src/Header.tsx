import React, { useState, useEffect } from "react";
import "./css/Header.css";
import "./css/index.css";
import firebase from 'firebase/compat/app';
import { Avatar, Dropdown, Menu, Space, Button, Col } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useAuth, useUser } from "reactfire";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { getFirestore, collection, query, where, doc, addDoc, setDoc, updateDoc} from "firebase/firestore";
import MenuItem from "antd/lib/menu/MenuItem";

export function Header() {
const auth = useAuth();
const [user34, setUser34] = useState<any>([]);

  useEffect(() => {
    auth.onAuthStateChanged( async function(user) {
    setUser34(user);
    // addUser(); This is not workign and causing an error  (the state of the user34 seems to be null)
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
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 2000,
    
      
      }}
    >
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "72",
          maxWidth: 1140,
          padding: "0 32px",
          width: "100%"
        }}
      > */}
        {/* <Logo /> */}
        <div
         
        >
        <Link to="/">
          <Space style={{
            marginLeft: 10
          }}>
          <a href="/">
            <svg width="71.36" height="40" viewBox="0 0 211 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.008 79.24C31.6907 79.24 25.12 77.448 19.296 73.864C13.5467 70.28 9.02933 65.4267 5.744 59.304C2.53333 53.1067 0.928 46.312 0.928 38.92C0.928 31.8267 2.34667 25.4053 5.184 19.656C8.02133 13.832 12.0533 9.24 17.28 5.87999C22.5813 2.52 28.704 0.839999 35.648 0.839999C42.0693 0.839999 47.5947 1.69867 52.224 3.416C56.928 5.05866 60.3627 7.18666 62.528 9.8C63.7227 11.2933 64.4693 13.272 64.768 15.736C65.1413 18.2 65.328 21.2613 65.328 24.92H63.088C61.6693 18.3493 58.9813 13.4587 55.024 10.248C51.0667 6.96266 45.728 5.31999 39.008 5.31999C32.96 5.31999 27.92 6.92533 23.888 10.136C19.856 13.272 16.8693 17.3787 14.928 22.456C13.0613 27.5333 12.128 33.0213 12.128 38.92C12.128 51.5387 14.592 60.6853 19.52 66.36C24.448 71.96 30.944 74.76 39.008 74.76C42.816 74.76 46.064 74.424 48.752 73.752C51.44 73.08 53.9787 72.1093 56.368 70.84V51.352C56.368 48.8133 56.7787 46.6107 57.6 44.744C58.4213 42.8773 60.176 41.3467 62.864 40.152C65.6267 38.8827 69.6213 38.248 74.848 38.248V40.488C71.488 40.488 69.248 41.3467 68.128 43.064C67.008 44.7813 66.448 47.4693 66.448 51.128V72.184C62.416 74.648 58.1973 76.44 53.792 77.56C49.3867 78.68 44.4587 79.24 39.008 79.24ZM103.825 78.12C98.2254 78.12 93.6334 76.6267 90.0494 73.64C86.54 70.6533 84.7854 65.4267 84.7854 57.96V37.8C84.7854 33.992 84.2627 31.192 83.2174 29.4C82.172 27.5333 80.0814 26.6 76.9454 26.6H75.8254V24.36H84.7854C87.548 24.36 89.6014 24.7333 90.9454 25.48C92.364 26.152 93.372 27.4213 93.9694 29.288C94.5667 31.1547 94.8654 33.992 94.8654 37.8V57.96C94.8654 63.1867 96.0227 67.032 98.3374 69.496C100.727 71.8853 103.676 73.08 107.185 73.08C111.143 73.08 114.876 71.1013 118.385 67.144V24.36H128.465V77H122.865L118.945 72.52H118.385C116.817 74.088 114.764 75.432 112.225 76.552C109.761 77.5973 106.961 78.12 103.825 78.12ZM150.547 17.64C148.83 17.64 147.336 16.9307 146.067 15.512C144.872 14.0933 144.275 12.4133 144.275 10.472C144.275 8.904 144.723 7.672 145.619 6.776C146.59 5.87999 147.859 5.43199 149.427 5.43199C151.144 5.43199 152.6 6.14133 153.795 7.56C155.064 8.97867 155.699 10.6587 155.699 12.6C155.699 14.168 155.214 15.4 154.243 16.296C153.347 17.192 152.115 17.64 150.547 17.64ZM146.291 37.8C146.291 33.992 145.768 31.192 144.723 29.4C143.678 27.5333 141.587 26.6 138.451 26.6H136.211V24.36H146.291C149.054 24.36 151.107 24.7333 152.451 25.48C153.87 26.152 154.878 27.4213 155.475 29.288C156.072 31.1547 156.371 33.992 156.371 37.8V77H146.291V37.8ZM184.717 78.12C182.328 78.12 179.901 77.6347 177.437 76.664C174.973 75.6187 172.845 73.9387 171.053 71.624C169.336 69.3093 168.477 66.248 168.477 62.44C168.477 56.7653 171.091 52.7333 176.317 50.344C181.619 47.9547 188.525 46.76 197.037 46.76H200.397C200.397 39.4427 199.389 34.44 197.373 31.752C195.357 29.064 192.445 27.72 188.637 27.72C185.277 27.72 182.589 28.4293 180.573 29.848C178.557 31.2667 177.139 33.7307 176.317 37.24H171.277C171.277 34.7013 171.427 32.7227 171.725 31.304C172.024 29.8107 172.808 28.4293 174.077 27.16C175.421 25.816 177.624 24.8453 180.685 24.248C183.821 23.576 187.219 23.24 190.877 23.24C196.925 23.24 201.704 24.8827 205.213 28.168C208.723 31.3787 210.477 37.576 210.477 46.76V77H204.877L200.957 71.96H200.397C199.053 73.6773 197.075 75.1333 194.461 76.328C191.848 77.5227 188.6 78.12 184.717 78.12ZM189.757 73.08C192.221 73.08 194.275 72.4827 195.917 71.288C197.56 70.0933 199.053 68.4507 200.397 66.36V51.24H197.037C191.512 51.24 187.144 52.2853 183.933 54.376C180.723 56.392 179.117 59.08 179.117 62.44C179.117 65.8747 180.125 68.5253 182.141 70.392C184.232 72.184 186.771 73.08 189.757 73.08Z" fill="#569764"/>
            </svg>
          </a>
          </Space>
        </Link>
        </div>
        <Menu mode="horizontal"
          style={{
            width: "50%",
            borderBottom: "none",
            justifyContent: "center",
            marginLeft: 50
          }}
        >
          <Menu.Item key="home">
          <a href="/">Discover</a>
          </Menu.Item>
          <Menu.Item key="my-trips">
            <a href="/mytrips">My trips</a>
          </Menu.Item>
        </Menu>

        { user34 ?
          <div style={{             
            minWidth: 300,
            justifyContent: "end"
          }}>
            <Space direction="horizontal" size="middle" style={{justifyContent: "end", marginLeft: 80}}>
              <Dropdown
                trigger={["click"]}
                overlayStyle={{ paddingTop: 16, marginLeft: -100 }}
                overlay={
                  <Menu>
                    <Menu.Item>
                    Account information
                    </Menu.Item>
                    <Menu.Item>
            <a href="/GuideTrips">Guide dashboard</a>
          </Menu.Item>
                    <Menu.Item>
                      <a
                        href="https://forms.gle/Bt6PcdEmng5Zozhu8"
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
          <Menu mode="horizontal"
          className="rhs"
          style={{
            borderBottom: "none",
          }}>
            <MenuItem>
              <Button
                onClick={googleLogin}
                type="primary"
                size="large"
                style={{
                  marginBottom: 16,
                  top: 8,
                  borderRadius: 200,
                  marginLeft: "auto",
                  color: "white",
                  border: "none",
                  backgroundColor: "#599B67",
                }}
              >
                Signup
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                onClick={googleLogin}
                type="primary"
                size="large"
                style={{
                  marginBottom: 16,
                  top: 8,
                  borderRadius: 200,
                  marginLeft: "auto",
                  color: "#000",
                  background: "#fff",
                  border: "solid 1px #0404051a"
                }}
              >
                Login
              </Button>
            </MenuItem>
          </Menu>
  }
      </div>
    // </div>

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

