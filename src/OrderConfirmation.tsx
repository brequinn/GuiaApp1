import { Button, Dropdown, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import React, { useEffect, Component, useState } from "react";
import "./css/Home.css";
import { GuideCard } from './GuideCard';
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { RedoOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";


export function OrderConfirmation() {
  const { Meta } = Card;
  const auth = getAuth();
  var user = auth.currentUser;
  const params = useParams<{guidename?: string}>();
  const [data1, setData] = useState<any>([]);
  const [guideName, setName] = useState<any>([]);

  async function getGuideDetail() {
    const db = getFirestore();
    const q = query(collection(db, "guides"), where(`IDtag`, `==`, params.guidename));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    // setName(doc.data().guideName);
    setData(result);
    console.log(JSON.stringify(data1));
  }  

  useEffect(() => {
    getGuideDetail();
}, []);

    return (
      <>
       {data1.map((guide: any) => (
           <div> 
       <Header />
      <div> 
            <h1   
            
        className="h1">Order Confirmation
        
        </h1>
        <div style={{marginLeft: 500}}>
        <img  src={guide.photoURL}/>
        <h1>Your trip with {guide.firstName}</h1>
        <h3>Details</h3>
        <p>Trip to London from 11/5-11/30</p>
        </div>

        <Card title="Price summary" style={{ width: 300, marginLeft: 1200, marginTop: -350 }}>
      <p>Subtotal: $50</p>
      <p>Service Fee: $7.50</p>
      <p>Total: $57.50</p>
      <p>Delivery time: 3 days</p>
     
      <Button   type="primary"
          size="large"
          style={{
            marginBottom: 16,
            marginRight: 8,
            top: 8,
            borderRadius: 200,
           
            marginTop: 20,
            color: "white",
            border: "none",
            padding: "8px 28px",
            backgroundColor: "#599B67",
          }}>Continue to checkout</Button>
    </Card>

     
      </div>
      </div>
       ))} 
      </>
    );
  }

  export default OrderConfirmation;