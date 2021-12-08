import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import firebase from 'firebase/compat/app';
import { Link, useParams } from "react-router-dom";
import { Header } from '../Header';
import { url } from 'inspector';


export function ItineraryCard() {

    const { Meta } = Card;
    function openLink() {
      
      window.open("www.bbc.com", "_blank")
    }

    return (
      <>
  
   
      <Card
   onClick={openLink}
   style={{ width: 300, marginLeft: 0, cursor: 'pointer' }}
    cover={
      <img
        alt="example"
        src="https://best-itinerary.com/wp-content/uploads/2019/05/map-4x.png"
      />
    }
  
  >
    <Meta
    //   avatar={<Avatar src={guide.guidePhoto} />}
      title="Itinerary for New York City"  
      description= "Click to view"  
     
    />
  </Card>,
      </>
    );
  }

  export default ItineraryCard;