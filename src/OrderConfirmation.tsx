import { Button, Dropdown, Card, Avatar, Space, Select } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import React, { useEffect, Component, useState } from "react";
import "./css/Home.css";
import { GuideCard } from './GuideCard';
import { Link, useParams } from "react-router-dom";
import { RedoOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc, setDoc, addDoc} from "firebase/firestore";


export function OrderConfirmation() {
  const { Meta } = Card;
  const auth = getAuth();
  var user = auth.currentUser;
  const params = useParams<{guidename?: string}>();
  const [data1, setData] = useState<any>([]);
  const [travelLocation, settravelLocation] = useState<any>([]);
  const [travelDates, settravelDates] = useState<any>([]);
  const [guideName, setName] = useState<any>([]);  
  const [user1, setUser1] = useState<any>([]);
  const [costPrice, setcostPrice] = useState<any>([45]);
  const [daystoBook, setdaystoBook] = useState<any>([1]);
  const { Option } = Select;
  const paramsTimeframe = useParams<{timeframe?: string}>();
  const paramsLocation = useParams<{location?: string}>();


  async function getGuideDetail() {
    const db = getFirestore();
    const q = query(collection(db, "guides"), where(`IDtag`, `==`, params.guidename));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    setData(result);
    console.log(JSON.stringify(data1));
  }

  async function bookTrip(){
    const db = getFirestore();
      await addDoc(collection(db, "users", user1.uid, "trips"),{
        forname: "Peter",
        surname: "Parker",
        tripDesitination: "Mexico"
    })
    console.log ("Data sent")
  
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
    getGuideDetail();
    setUser1(user);
  });
}, []);
  

  
  function onLocationChange1(value: any) {
    console.log(`selected ${value}`);
    setdaystoBook(value);
    setcostPrice(value*45);
  }

  function updatePriceAndDate() {


  }

 
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val: any) {
    console.log('search:', val);
  }


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
        <h1>Book your trip with {guide.firstName}</h1>
        <h3>Details</h3>
        <p>Trip to {paramsLocation.location} from {paramsTimeframe.timeframe}</p>
        <p>$45 per day
    </p>

    <p>3 days delivery
    </p>
    <RedoOutlined />
    <p>2 revisions
    </p>
        <h3>Days to book</h3>
        <Space style={{marginLeft: 0}} direction="vertical" >
    <Select
    defaultValue="1"
    showSearch
    style={{ width: 200 }}
    placeholder="Select days to book"
    optionFilterProp="locations"
    onChange={onLocationChange1}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
  >
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    <Option value="4">4</Option>
    <Option value="5">5</Option>
    <Option value="6">6</Option>
    <Option value="7">7</Option>
    <Option value="8">8</Option>
    <Option value="9">9</Option>
    <Option value="10">10</Option>

   
  </Select>
  </Space>

        </div>

        <Card title="Price summary" style={{ width: 300, marginLeft: 1200, marginTop: -570 }}>
      <p>Days to plan: {daystoBook} days</p>
      <p>Total: ${costPrice}</p>
      <p>Estimated delivery time: 3 days</p>
     
     
      {/* <Link to="/MyTrips"> */}
      <Button   type="primary"
          size="large"
          onClick={bookTrip}
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
          }}>Book your trip with {guide.firstName}
          </Button>
          {/* </Link> */}
    </Card>

     
      </div>
      </div>
       ))} 
      </>
    );
  }

  export default OrderConfirmation;