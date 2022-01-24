
import { Avatar, List, Layout, Row, Col, Space, Button } from "antd";
import { FileAddOutlined, SearchOutlined, EditOutlined } from "@ant-design/icons";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { GuideCard } from "./GuideCard";
import { Header } from './Header';
import dayjs from "dayjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export function GuideResults() {
const auth = getAuth();
var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const history = useHistory();
const paramsTimeframe = useParams<{timeframe?: any}>();
const paramsLocation = useParams<{location?: string}>();
const paramsdailyCost = useParams<{dailycost?: string}>();

  async function getGuides() {
    const user = auth.currentUser;
    const db = getFirestore();
    const q = query(collection(db, "guides"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());


    setData(result);
   
  } 
  const firstDate = dayjs(paramsTimeframe.timeframe.split(',')[0]).format("MMM D").toString();
  const month = dayjs(paramsTimeframe.timeframe.split(',')[0]).format("MMM").toString();
  const secondDate = dayjs(paramsTimeframe.timeframe.split(',')[1]).format("MMM D").toString().replace(month, "");
  const daDate = firstDate + " to " + secondDate;


  useEffect(() => {
      getGuides();
      moment(paramsTimeframe.timeframe).format('MMMM Do YYYY, h:mm:ss a');
  }, []);

  return (  
    <>
    <Header />
    <div
      style={{
        backgroundColor: "#579664",
        minHeight: 68,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
      className='container'
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0
        }}
      >
        <SearchOutlined style={{ color: "#fff", fontSize: "18px", margin: "0px 5px" }}/>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "18px",
            marginBottom: 0,
            color: "#DDEAE0",
            margin: "0px 5px"
          }}
        >
          <span className="hide-mob">Showing guides for </span><span className="medium" style={{color: "#fff"}}>{paramsLocation.location}</span> from <span className="medium" style={{color: "#fff"}}>{daDate}</span>
        </h1>
        <Button type="link" href="/" shape="circle" style={{margin: "0px 5px", backgroundColor: "#fff", color: "#000", borderColor: "#fff" }} icon={<EditOutlined style={{marginTop: "6px"}} />} ></Button>
      </div>
    </div>
    <div
      className='container'
      style={{
        marginTop: 32
      }}
      >
    <Row gutter={[16, 24]}
      style={{
        width: "100%",
        margin: "auto"
      }}
    >
{data1.map((guide: any) => (
        
        <GuideCard
          guide={guide}
          key={guide}
        />
      ))}   
    </Row>
        </div>
    </>
  );
  
}

  export default GuideResults;