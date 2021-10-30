import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { PopularDestinations } from './PopularDestinations';
import { HomeSearchBar } from './HomeSearchBar';

export function Home() {
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
  <HomeSearchBar  />
        </div>
       <div className="getStartedButton">
      
        </div>
        <PopularDestinations/>
      </div>
      </>
    );
  }

  export default Home;