import { DatePicker, Space, Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { PopularDestinations } from './PopularDestinations';
import { HomeSearchBar } from './HomeSearchBar';
import { HomeDatePicker} from './HomeDatePicker';
import { useHistory } from 'react-router-dom';

export function Home() {

  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }
  const history = useHistory();
  const clickResult = () => history.push('/searchResults');

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
  <HomeDatePicker  />
        </div>
        <div>
          <Button  onClick={clickResult} type="primary"
          size="large"
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
       <div className="getStartedButton">
      
        </div>
        <PopularDestinations/>
      </div>
      </>
    );
  }

  export default Home;