import { Button, Dropdown, Card, Row, Col } from 'antd';
import { HeartOutlined } from "@ant-design/icons";
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
import cocktailIcon from'./images/cocktail.svg';
import museumIcon from'./images/museums.svg';
import jazzIcon from'./images/jazz.svg';
import beerIcon from'./images/beer.svg';
import clubIcon from'./images/club.svg';
import hikeIcon from'./images/hike.svg';
import guideIcon from'./images/guide.svg';


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
            <div className=""
              style={{
                maxHeight: 200,
                overflow: "hidden",
                display: "flex",
                alignItems: "center"
              }}
            >
              <img style={{width: "100%" }} src={guide.photoURL}/>
            </div>
            <div
              className="pageContent"
              style={{
                backgroundColor: "#fff",
                position: "relative",
                borderRadius: "20px",
                width: "100vw"
              }}
            >
              <div 
                className='container'
              >
                <div
                  style={{
                    marginTop: "-84px",
                    position: "absolute"
                  }}
                >
                    {/* PLACEHOLDER AVATAR IMAGE */}
                    <div 
                      style={{
                        
                        justifyContent: "center",
                        border: "solid 4px #fff",
                        backgroundColor: "#569764",
                        borderRadius: "200px",
                        marginRight: "10px",
                        width: "132px",
                        height: "132px",
                        fontSize: "54px",
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#fff",

                      }}>
                      {guide.guideName.charAt(0)}
                    </div>
                    {/* END PLACEHOLDER */}
                    <Button href={`/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}/confirmation`} className="buttonShadow" shape="round" size="large">Book trip with {guide.guideName.split(" ")[0]}</Button>
                    {/* <Button className="buttonShadow" shape="circle" size="large"><HeartOutlined /></Button> */}
                </div>
                <Row
                  style={{
                    paddingTop: "64px"
                  }}
                >
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 15}}
                    lg={{ span: 15 }}
                  >                 
                    <h1   
                      >{guide.guideName}
                    </h1>
                    <p>{guide.guideDescription}</p>
                    <p>I specialize in the following groups:</p>
                    <p 
                      style={{ fontSize: "12px", fontWeight: "normal" }}
                      className="specialities"
                      >
                      <div dangerouslySetInnerHTML={{ __html: guide.groupSpecialities.replace(/Solo/gi, '<span>Solo</span>').replace(/Couples/gi, '<span>Couples</span>').replace(/travelers/gi, '<span>Travelers</span>').replace(',','') }} />
                    </p>
                    <p>I specialize in these activities:</p>
                

                    <p 
                      style={{ fontSize: "12px", fontWeight: "normal" }}
                      className="specialities1"
                      >
                      <div dangerouslySetInnerHTML={{ __html: guide.guideActivities.replace(/Jazz clubs/gi, '<span>Jazz clubs</span>').replace(/Off the beaten path/gi, '<span>Off the beaten path</span>').replace(/museums/gi, '<span>Museums</span>').replace(/bars/gi, '<span>Bars</span>').replace(/breweries/gi, '<span>Breweries</span>').replace(/tours/gi, '<span>Tours</span>').replace(/hiking/gi, '<span>Hiking</span>').replace(',','') }} />
                    </p>

                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 8, offset: 1 }}
                    lg={{ span: 8, offset: 1 }}
                  >
                    <Card 
                      size="small" 
                      title={"Daily price: "+"$"+ guide.guideDailyCost}
                      style={{
                        width: 400,
                        borderRadius: "10px"
                        }}>
                      <p>Delivery timeframe: {guide.deliveryTimeFrame} per day</p>
                      <RedoOutlined />
                      <p>2 revisions</p>
                      <Link to={`/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}/confirmation`}>
                        <Button>
                          Book your trip with {guide.firstName} for {paramsLocation.location}
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
         ))} 
    
      </>
        
    );
  }

  export default GuideDetail;
  