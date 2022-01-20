import { Input, Space, Dropdown, Button, Menu, Select, Row, Col, Collapse } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import "./css/Home.css";
import { Header } from './Header';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { message } from 'antd';
import { url } from 'inspector';
import { BgColorsOutlined } from '@ant-design/icons';
import background  from './images/guia-bg.jpg'

const { Panel } = Collapse;

export function Home() {

  const { RangePicker } = DatePicker;
  const auth = getAuth();
 

    const dateFormat = 'MM/DD/YYYY';
    const weekFormat = 'MM/DD';
    const monthFormat = 'MM/YYYY';
   
    
    const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];


const history = useHistory();

const { Search } = Input;
const [tripLocation, settripLocation] = useState<any>([1]);
const [tripTimeline, settripTimeline] = useState<any>([2]);
const [userProfile, setuserProfile] = useState<any>([]);


  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }

  function testUser() {
    auth.onAuthStateChanged(function(user) {
    console.log(JSON.stringify(user))
  });
  }

  const OPTIONS = ['New York City', 'Mexico City'];


  function checkData() {
   if (tripLocation == 1 || tripTimeline == 2) {
    message.warn('Please fill out your travel destination and when you plan to travel');
  } else {
  history.push(`/searchResults/${tripLocation}/${tripTimeline}`);
  }
}

  useEffect(() => {
    // Auth.onAuthStateChanged()

  }, );
  
  const { Option } = Select;
  
  function onLocationChange1(value: any) {
    console.log(`selected ${value}`);
    settripLocation(value);
    
   
    console.log("Trip location is "  + tripLocation)
  }

  function onTimeChange(value: any) {
 

    settripTimeline(value);
  
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
       <Header />
      <div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID"
     data-login_uri="https://your.domain/your_login_endpoint"
     data-your_own_param_1_to_login="any_value"
     data-your_own_param_2_to_login="any_value">
    </div>
      <div 
        style={{
          backgroundImage: "url(" + background + ")",
          margin: "auto",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          height: "50vh",
          paddingBottom: 32,
        }}
      > 
        <div
          style={{
            margin: "32px auto",
          }}
        >
              <h1 
                className="h1"
                style={{
                  lineHeight: "72px",
                  fontSize: "56px",
                  color: "#fff"
                }}
              >
                The better<br></br> way to travel.
              </h1>
            
          <p className="descriptionText"
            style={{
              fontSize: 18,
              color: "#fff"
            }}
          >
          Find an expert guide to help you plan your trip.
          </p>
        </div>
      </div>
      <div
        className="container">
      <Row 
      gutter={16}
      style={{
        margin: "auto",
        borderRadius: 20,
        padding: "24px 24px 16px 24px",
        boxShadow: "0px 27px 201px rgba(0, 0, 0, 0.07), 0px 17.5px 117.715px rgba(0, 0, 0, 0.0531481), 0px 10.4px 64.0222px rgba(0, 0, 0, 0.0425185), 0px 5.4px 32.6625px rgba(0, 0, 0, 0.035), 0px 2.2px 16.3778px rgba(0, 0, 0, 0.0274815), 0px 0.5px 7.90972px rgba(0, 0, 0, 0.0168519)",
        marginTop: -48,
        background: "#fff"
      }}
      >
        <Col xs={24} sm={24} md={10} lg={10}>
          <h3>Location</h3>
          <Select
            showSearch
            style={{ width: "100%", borderColor: "#599B67", marginBottom: "16px" }}
            placeholder="Where are you traveling to?"
            optionFilterProp="locations"
            onChange={onLocationChange1}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            size="large"
          >
            <Option value="New York City">New York City</Option>
            {/* <Option value="Mexico City">Mexico City</Option> */}
          
          </Select>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10}>
          <h3>Dates</h3>
          <RangePicker format={dateFormat} onChange={onTimeChange} size="large" 
          style={{
            width: "100%",
            marginBottom: "16px"
          }}
          />
        </Col>
        <Col xs={24} sm={24} md={4} lg={4}
          style={{
            display: "flex",
            alignItems: "end"
          }}
        >
          <Button type="primary"
            size="large"
            onClick={checkData}
            style={{
              borderRadius: 200,
              color: "white",
              border: "none",
              padding: "8px 28px",
              marginBottom: "16px",
              width: "100%",
              backgroundColor: "#599B67",
            }}>Search</Button>
        </Col>
      </Row>
      </div>
      <div
        className='container'
      >
        <h2
          className="h3"
          style={{
            marginTop: "24px",
            fontSize: "32px",
            textAlign: "center",
            color: "#4C6448"
          }}
        >
          FAQs
        </h2>
        <Collapse
          style={{
            borderRadius: "20px",
            borderBottom: "none"
          }}
        >
          <Panel
            header="What is Guia?" key="1"
          >
            <p>Guia is a marketplace connecting travelers with travel creators around the world. Guides provide you with a personalized itinerary to help you enjoy the most out of your trip</p>
          </Panel>
          <Panel header="What to I make a booking?" key="2">
            <p>Vaporware pabst portland literally, listicle ramps iPhone la croix 3 wolf moon gochujang whatever. Organic gentrify plaid, cold-pressed literally pabst bushwick trust fund hell of. Meh copper mug leggings health goth kombucha.</p>
          </Panel>
          <Panel header="How can I become a guide?" key="3">
            <p>hambray mixtape godard wayfarers fingerstache. Austin kombucha gentrify, craft beer health goth vaporware food truck mixtape hot chicken 90's coloring book try-hard la croix subway tile skateboard. Listicle gluten-free letterpress tousled</p>
          </Panel>
          <Panel header="I want to joing to BETA, how do I do that?" key="3">
            <p>Trust fund bicycle rights beard 3 wolf moon pug distillery skateboard waistcoat hot chicken ennui. Fashion axe vice live-edge pug. Sriracha marfa vexillologist mixtape taxidermy organic sartorial.</p>
          </Panel>
        </Collapse>

      </div>
      </>
    );
  }

  export default Home;