import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';


export function OrderConfirmation() {
    return (
      <>
       <Header />
      <div> 
            <h1   
            
        className="h1">Order Confirmation
        
        </h1>
           
        <p className="descriptionText">
        Continue to checkout
        </p>
     
      </div>
      </>
    );
  }

  export default OrderConfirmation;