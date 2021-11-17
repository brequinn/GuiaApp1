import { Input, Space, Dropdown, Button, Menu, Select } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import "./css/Home.css";
import { Header } from './Header';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { message } from 'antd';

export function Home() {

  const { RangePicker } = DatePicker;

    const dateFormat = 'MM/DD/YYYY';
    const weekFormat = 'MM/DD';
    const monthFormat = 'MM/YYYY';
   
    
    const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];


const history = useHistory();

const { Search } = Input;
const [tripLocation, settripLocation] = useState<any>([1]);
const [tripTimeline, settripTimeline] = useState<any>([2]);


  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }


  function checkData() {
   if (tripLocation == 1 || tripTimeline == 2) {
    message.warn('Please fill out your travel destination and when you plan to travel');
  } else {
  history.push(`/searchResults/${tripLocation}/${tripTimeline}`);
  }
}

  useEffect(() => {
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
      <div> 
            <h1   
            
        className="h1">Discover
        
        </h1>
           
        <p className="descriptionText">
         The better way to travel. Find an expert guide to help you plan your trip. 
        <p>
       
         Travel more, plan less! 
      
        </p>
        </p>
        <div style={{
               marginLeft: 550,
             
             }} >
 <Space style={{marginLeft: 100}} direction="vertical" >
    <Select
    showSearch
    style={{ width: 260 }}
    placeholder="Where are you traveling to?"
    optionFilterProp="locations"
    onChange={onLocationChange1}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
  >
    <Option value="New York City">New York City</Option>
   
  </Select>
  </Space>
  <div style={{marginTop: 20, marginLeft: 100}}>
<RangePicker
      format={dateFormat} onChange={onTimeChange} 
    />
      </div>
        </div>
      
        
        <div>
          <Button type="primary"
          size="large"
          onClick={checkData}
          style={{
            marginBottom: 16,
            marginRight: 8,
            top: 8,
            borderRadius: 200,
            marginLeft: 750,
            marginTop: 20,
            color: "white",
            border: "none",
            padding: "8px 28px",
            backgroundColor: "#599B67",
          }}>Search</Button>
    
        </div>
        {/* </Link> */}
       <div className="getStartedButton">
      
        </div>
    
      </div>
      </>
    );
  }

  export default Home;