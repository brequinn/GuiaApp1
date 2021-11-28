import { Avatar, List, Layout, Row, Col, Space } from "antd";
import React, { useEffect, Component, useState } from "react";
import firebase from 'firebase/compat/app';
import { Loading } from "./Loading";
import { GuideCard } from "./GuideCard";
import { Header } from './Header';
import { FileAddOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import moment from 'moment';
import { ChatOverview } from './Trips/Chat/ChatOverview';
import { ChannelBar } from './Trips/Chat/ChannelBar';
import { initializeApp } from "firebase/app";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";

export function TripOverview() {
const auth = getAuth();
var user = auth.currentUser;
const [data1, setData] = useState<any>([]);
const [tripID1, setTripID] = useState<any>([]);
const history = useHistory();
const paramsTimeframe = useParams<{timeframe?: string}>();
const paramsLocation = useParams<{location?: string}>();
const paramsTripID = useParams<{tripid?: string}>();
const params = useParams<{tripid?: string}>();


   async function getTripInfo() { 
    const db = getFirestore();
    const q = query(collection(db, "trips"), where(`tripID`, `==`, params.tripid ));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc=> doc.data());
    setData(result);
    console.log(JSON.stringify(data1));
  }

  function yes(){
    getTripInfo();
    console.log(JSON.stringify(data1));
  }

  useEffect(() => {
   getTripInfo();
   console.log(params.tripid)
  }, []);

  return (  
    <> 
    <Header />
    {data1.map((guide: any) => (
   <div style={{marginLeft: 50}}>
   {/* <h1>Trip Overview</h1>
   <h3>Trip Location</h3>
   <h5>{guide.tripLocation}</h5>
   <h3>Timeframe</h3>
   <h5>{guide.tripTimeframe}</h5>
   <h3> Your host</h3>
    <h5>{guide.guideFirstName}</h5>  
    <h3> Total trip cost</h3>
    <h5>${guide.tripCost}</h5> */}
   
    <div>
      <Layout>
        <Row
          gutter={[0, 0]}
          style={{
            height: "calc(100vh - 72px - 56px)",
          }}
        >
       
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            style={{
              backgroundColor: "#0D0D0D",
              height: "100vh",
              display: "inline-block",
              overflow: "scroll",
            }}
            className="container"
          >
            <ChatOverview />
          </Col>
          <ChannelBar />
        </Row>
      </Layout>
    </div>     
        </div>

        
    ))} 
 
    </>
  
  );
}

  export default TripOverview;