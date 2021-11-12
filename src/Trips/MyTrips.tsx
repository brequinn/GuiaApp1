import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "../css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from '../Header';
import { TripCard } from './TripCard';


export function MyTrips() {
    return (
      <>
       <Header />
      <div> 
            <h1   
            
        className="h1">My Trips
        
        </h1>
           
        <p className="descriptionText">
         <TripCard />
        </p>
     
      </div>
      </>
    );
  }

  export default MyTrips;