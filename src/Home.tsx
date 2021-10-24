import { Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import { Header } from './Header';
import { HomeSearchBar } from './HomeSearchBar';

export function Home() {
    return (
      <>
       <Header />
      <div>
       
            <h1   
            

        className="h1">Discover
        
        </h1>
           
        <p className="descriptionText">
         The better way to travel. Travel more, plan less! 
        </p>
        <div style={{
               marginLeft: 550,
             
             }} >
  <HomeSearchBar  />
        </div>
       <div className="getStartedButton">
      
        </div>
      </div>
      </>
    );
  }

  export default Home;