import { Avatar, Row, Col, List, Space, Menu, Button, Dropdown, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
  import React, { Component, useEffect } from "react";
  import "firebase/firestore";
  import firebase from "firebase/compat/app";
  import { useParams, Link } from "react-router-dom";
  import firestore from "./firestore";
  import { useHistory } from 'react-router-dom';
  import "./css/ImageTile.css";
  import { useState } from "react";
  import cocktailIcon from'./images/cocktail.svg';
  import museumIcon from'./images/museums.svg';
  import jazzIcon from'./images/jazz.svg';
  import beerIcon from'./images/beer.svg';
  import clubIcon from'./images/club.svg';
  import hikeIcon from'./images/hike.svg';
  import guideIcon from'./images/guide.svg';

  
  export function GuideCard( {guide} : {guide:any}) {

    const paramsTimeframe = useParams<{timeframe?: string}>();
    const paramsLocation = useParams<{location?: string}>();
    useEffect(() => {
    
  }, []);

  const params = useParams();
  const history = useHistory();

  // group formatting
  var specialities = guide.groupSpecialities.toString();


    return (
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
       
      >
        <Link to={`/guide/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}`}>
          <Row gutter={24} align="middle" style={{ paddingBottom: "24px", borderBottom: "solid 1px #F2F2F2" }}>
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={6}
            >
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
                    padding: "8px 12px 8px 12px",
                    borderRadius: "200px",
                    background: "rgba(255, 255, 255, 0.25)",
                    display: "inline-block",
                    color: "black",
                  }}
                >
                </span>
              </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 10 }}
            lg={{ span: 10 }}
          > 
            <div
              className="card-copy"
              style={{
                borderRadius: "0px 0px 10px 10px",
                background: "#ffffff0a",
              }}
            >
              <Row>
                <Col className="result-row">
                  <h3
                    style={{
                      color: "black",
                      fontSize: "18px"
                    }}
                  > 
                    {/* PLACEHOLDER AVATAR IMAGE */}
                    <div 
                      style={{
                        justifyContent: "center",
                        backgroundColor: "#569764",
                        borderRadius: "200px",
                        marginRight: "10px",
                        width: "32px",
                        height: "32px",
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#fff",

                      }}>
                      {guide.guideName.charAt(0)}
                    </div>
                    {/* END PLACEHOLDER */}
                    {guide.guideName}
                  </h3>
                  <h4
                    style={{
                      color: "black",
                      opacity: "0.6",
                      fontWeight: "normal"
                    }}
                  >
                    {guide.guideDescription}
                    
                  </h4>
                
                </Col>
              </Row>
              </div>
          </Col>
          <Col
          xs={24}
          sm={24}
          md={{ span: 6, offset: 2 }}
          lg={{ span: 6, offset: 2 }}
          className="guide-features"
          >
            <h4
              style={{
                color: "black",
                opacity: "0.6",
              }}
            >
              Group specialities:
              </h4>
              <p 
                style={{ fontSize: "12px", fontWeight: "normal" }}
                className="specialities"
              >
                <div dangerouslySetInnerHTML={{ __html: specialities.replace(/Solo/gi, '<span>Solo</span>').replace(/Couples/gi, '<span>Couples</span>').replace(/travelers/gi, '<span>Travelers</span>').replace(',','') }} />
              </p>
            <h4
              style={{
                color: "black",
                opacity: "0.6",
                marginTop: "24px",
                marginBottom: "12px"
              }}
            >
              Activity expert in:
            </h4>
            <p>
              <div dangerouslySetInnerHTML={{ __html: guide.guideActivities.replace(/bars/gi, '<img src="'+ cocktailIcon +'" />').replace(/museums/gi, '<img src="'+ museumIcon +'" />').replace(/Jazz/gi, '<img src="'+ jazzIcon +'" />').replace(/breweries/gi, '<img src="'+ beerIcon +'" />').replace(/clubs/gi, '<img src="'+ clubIcon +'" />').replace(/off the beaten path/gi, '<img src="'+ hikeIcon +'" />').replace(/tours/gi, '<img src="'+ guideIcon +'" />').replace(/And more!/gi, '<span class="showmore">+ And more</span>').replace(", ","") }} />
            </p>
          </Col>
          </Row>
        </Link>
      </Col>
    );
  }