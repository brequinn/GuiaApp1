import { Button, Dropdown, Card } from 'antd';
import React, { useEffect, Component, useState } from "react";
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { GuideCard } from './GuideCard';
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { RedoOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";


export function GuideDetail() {
  const auth = getAuth();
  var user = auth.currentUser;

  const [data1, setData] = useState<any>([]);
  const [guideName, setName] = useState<any>([]);
  const paramsTimeframe = useParams<{timeframe?: string}>();
  const paramsLocation = useParams<{location?: string}>();
  const params = useParams<{guidename?: string}>();
  
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
    console.log("printing the params " + params.guidename)
}, []);
  
  return (
   
      <>
       {data1.map((guide: any) => (
             <div>  
       <Header />
      <div style={{marginLeft: 30}}> 
      <div>
      <img style={{marginLeft: 650}} src={guide.photoURL}/>
            <h1   
            
        className="h1">  {guide.guideName}
        </h1>
        
        </div>
        <h1>About this guide</h1>
        <p>{guide.guideDescription}</p>
        <p>I specialize in the following groups: {guide.groupSpecialities}
          </p>
           <p>I specialize in the following activities : {guide.guideActivities} </p>
           <p>2 iterations on your itinerary</p>
           <div>
           <Card size="small" title="Booking price" style={{ width: 400 }}>
      <p>${guide.guideDailyCost} per day</p>
      <p>3 Days Delivery</p>
      <RedoOutlined />
      <p>2 revisions</p>
    
      <Link to={`/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}/confirmation`}>
      <Button>
             Book your trip with {guide.firstName} for {paramsLocation.location}
           </Button>
           </Link>
    </Card>
           </div>
         
      </div>
      </div> 
         ))} 
      </>
        
    );
  }

  export default GuideDetail;
  