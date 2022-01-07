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
        style={{
        }}
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
            xs={24}
            sm={24}
            md={11}
            lg={11}
          >
            <div
              className="card-copy"
              style={{
                borderRadius: "0px 0px 10px 10px",
                background: "#ffffff0a",
              }}
            >
              <Row>
                <Col>
                  <h3
                    style={{
                      color: "black",
                      fontSize: "18px"                    
                    }}
                  >
                    <img style={{ borderRadius: "200px", marginRight: "8px", width: "32px", height: "32px" }} src="avatar"/>{guide.guideName}
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
          md={7}
          lg={7}
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
                <div dangerouslySetInnerHTML={{ __html: specialities.replace(/Solo/gi, '<img src="icon-solo.png" />Solo').replace(/Couples/gi, '<img src="icon-couples.png" />Couples').replace(/travelers/gi, '<img src="icon-travelers.png" />Travelers') }} />
              </p>
            <h4
              style={{
                color: "black",
              }}
            >
              Activity expert in: {guide.guideActivities}
            </h4>
          </Col>
          </Row>
        </Link>
      </Col>
    );
  }