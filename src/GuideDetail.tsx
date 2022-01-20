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
                    <Button style={{ marginRight: "8px" }} href={`/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}/confirmation`} className="buttonShadow" shape="round" size="large">Book {guide.guideName.split(" ")[0]}</Button>
                    <Button className="buttonShadow" shape="circle" size="large"><HeartOutlined /></Button>
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
                      style={{
                        fontSize: "24px"
                      }}
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
                    <div
                        className="guide-features"
                        style={{
                          marginLeft: "16px",
                          alignItems: "center"
                        }}
                      >
                      <p>
                        <div dangerouslySetInnerHTML={{ __html: guide.guideActivities.replace(/bars/gi, '<img src="'+ cocktailIcon +'" />').replace(/museums/gi, '<img src="'+ museumIcon +'" />').replace(/Jazz/gi, '<img src="'+ jazzIcon +'" />').replace(/breweries/gi, '<img src="'+ beerIcon +'" />').replace(/clubs/gi, '<img src="'+ clubIcon +'" />').replace(/off the beaten path/gi, '<img src="'+ hikeIcon +'" />').replace(/tours/gi, '<img src="'+ guideIcon +'" />').replace(/And more!/gi, '<span class="showmore">+ And more</span>').replace(", ","") }} />
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 8, offset: 1 }}
                    lg={{ span: 8, offset: 1 }}
                  >
                    <Card 
                      size="small" 
                      title={"Prices from "+"$"+ guide.guideDailyCost}
                      style={{
                        width: 400,
                        borderRadius: "10px",
                        boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.07), 0px 11.6667px 23.4259px rgba(0, 0, 0, 0.0531481), 0px 6.93333px 12.7407px rgba(0, 0, 0, 0.0425185), 0px 3.6px 6.5px rgba(0, 0, 0, 0.035), 0px 1.46667px 3.25926px rgba(0, 0, 0, 0.0274815), 0px 0.333333px 1.57407px rgba(0, 0, 0, 0.0168519)"
                        }}>
                      <p>{guide.deliveryTimeFrame} Days Delivery</p>
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
  