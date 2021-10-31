import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";
import firebase from 'firebase/compat/app';
import { Header } from './Header';
import { GuideCard } from './GuideCard';


export function GuideDetail() {
    return (
      <>
       <Header />
      <div> 
            <h1   
            
        className="h1">Tyler Greenfield profile!
        
        </h1>
      </div>
      </>
    );
  }

  export default GuideDetail;