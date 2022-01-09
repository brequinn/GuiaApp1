import { Button, Dropdown, Card, Avatar, Space, Select, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { message } from 'antd';
import { Header } from './Header';
import React, { useEffect, Component, useState } from "react";
import "./css/Home.css";
import { GuideCard } from './GuideCard';
import moment from 'moment';
import { Link, useParams } from "react-router-dom";
import { RedoOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc, setDoc, addDoc} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


export function OrderConfirmation() {

  const { Meta } = Card;
  const auth = getAuth();
  const params = useParams<{guidename?: string}>();
  const [data1, setData] = useState<any>([]);
  const [guideName, setGuideName] = useState<any>([]); 
  const [GuidephotoURL, setGuidePhoto] = useState<any>([]); 
  const [guideFirstName, setGuideFirstName] = useState<any>([]); 
  const [guideLocation, setGuideLocation] = useState<any>([]);  
  const [user1, setUser1] = useState<any>([]);
  const [costPrice, setcostPrice] = useState<any>([45]);
  const [daystoBook, setdaystoBook] = useState<any>([1]);
  const { Option } = Select;
  const paramsTimeframe = useParams<{timeframe?: any}>();
const paramsLocation = useParams<{location?: string}>();
  

  var uniqid = Date.now();
  const firstDate = dayjs(paramsTimeframe.timeframe.split(',')[0]).format("D MMM").toString();
  const month = dayjs(paramsTimeframe.timeframe.split(',')[0]).format("MMM").toString();
  const secondDate = dayjs(paramsTimeframe.timeframe.split(',')[1]).format("D MMM").toString().replace(month, "");
  const daDate = firstDate + " to " + secondDate;

  useEffect(() => {
    auth.onAuthStateChanged(async function(user) {
      getGuideDetail();
    console.log(JSON.stringify(data1));
    moment(paramsTimeframe.timeframe).format('MMMM Do YYYY, h:mm:ss a');
  });
}, []);

    function getGuideDetail() {
      auth.onAuthStateChanged(async function(user) {
    setUser1(user);
    const db = getFirestore();
    const q = query(collection(db, "guides"), where(`IDtag`, `==`, params.guidename));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    setData(result);
  
      });
  }

  function more()
  {
    auth.onAuthStateChanged(async function(user) {
    console.log(JSON.stringify(user));
  });
  }

  function bookTrip(){
    auth.onAuthStateChanged(async function(user) {
      if(!user) {
        message.warn('Please make sure you sign in to to book your trip');
      } else { 
    const db = getFirestore();
    {data1.map((guide: any) => (
       setDoc(doc(db, "trips", JSON.stringify(uniqid)),
      {
        guideName: guide.guideName,
        guideFirstName: guide.firstName,
        travelerUID: user1.uid,
        travelerName: user1.displayName,
        travelerPhoto: user1.photoURL,
        guideID: params .guidename,
        guidePhoto: guide.photoURL,
        TripItineraryLink: "https://tripadvisor.com",
        tripLocation: (paramsLocation.location),
        tripTimeframe: (paramsTimeframe.timeframe),
        tripDayLength: (daystoBook),
        tripCost: (costPrice),
        tripID: JSON.stringify(uniqid)   
    })
    ))}
  }
  });

    console.log ("Data sent")
  }



  function onLocationChange1(value: any) {
    console.log(`selected ${value}`);
    setdaystoBook(value);
    setcostPrice(value*45);
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
       <Col
        xs={24}
        sm={24}
        md={6}
        lg={6}
       
      >
    
            <h1     
        className="h1">Order Confirmation
        </h1>
      
        <div
                style={{
                  background: `url(${guide.photoURL})`,
                  paddingBottom: "64%",
                  backgroundSize: "cover",
                  borderRadius: "15px"
                }}
              >
                <span
                  style={{
                    padding: "40px 12px 8px 12px",
                    borderRadius: "200px",
                    background: "rgba(255, 255, 255, 0.25)",
                    display: "inline-block",
                    color: "black",
                  }}
                >
                </span>
              </div>
       
        <h1>Book your trip with {guide.firstName}</h1>
        <h3>Details</h3>
        <p>Trip to {paramsLocation.location} from {daDate}</p>
        <p>${guide.guideDailyCost} per day
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
  <div style={{marginTop: 20}}>
  <h3>Price summary</h3>
        <Card >
      <p>Days to plan: {daystoBook} days</p>
      <p>Total: ${costPrice}</p>
      <p>Estimated delivery time: 3 days</p>
     
     
      <Link to="/MyTrips">
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
          </Link>
    </Card>
    </div>
 
  
    </Col> 
      </div>
    
       ))} 
      
      </>
    );
  }

  export default OrderConfirmation;