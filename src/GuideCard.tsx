import {
    Avatar,
    Row,
    Col,
    List,
    Space,
    Menu,
    Button,
    Dropdown,
    message,
  } from "antd";
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
   
    return (
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={12}
        style={{
        }}
      >
        <Link to={`/guide/${guide.IDtag}/${paramsLocation.location}/${paramsTimeframe.timeframe}`}>
          <div
            style={{
              background: `url(${guide.photoURL})`,
              borderRadius: "10px 10px 0 0",
              paddingBottom: "48%",
              backgroundSize: "cover",
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
              <img src={''} />{" "}
            </span>
          </div>
  
          <div
            style={{
              borderRadius: "0px 0px 10px 10px",
              background: "#ffffff0a",
              padding: "16px 16px",
            }}
          >
            <Row>
              <Col span={17}>
                <h3
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginBottom: "0",
                  }}
                >
                  {guide.guideName}
                  
                  
                </h3>
                <h4
                  style={{
                    color: "black",
                    opacity: "0.6",
                    // fontWeight: "400",
                  }}
                >
                  {guide.guideDescription}
                  
                </h4>
              </Col>
          
            </Row>
            <h4
              style={{
                color: "black",
                opacity: "0.6",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                // fontWeight: "400",
                marginRight: 24,
              }}
            >
              Group specialities: {guide.groupSpecialities}
            </h4>
            <h4
              style={{
                color: "black",
                opacity: "0.6",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                // fontWeight: "400",
                marginRight: 24,
              }}
            >
              Activity expert in: {guide.guideActivities}
            </h4>
          </div>
        </Link>
      </Col>
    );
  }