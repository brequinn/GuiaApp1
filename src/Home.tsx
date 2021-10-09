import { Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import "./css/Home.css";

export function Home() {
    return (
      <div>
            <h1 className="h1">Guia</h1>
        
        <p className="descriptionText">
         The better way to travel. Travel more, plan less!
        </p>
        
       <div className="getStartedButton">
       <Link to="/login">
      <Button>
    <span>Login or sign up</span>
  </Button>
</Link> 
        </div>
      </div>
    );
  }

  export default Home;