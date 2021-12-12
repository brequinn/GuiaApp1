import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom'


export function ItineraryCard() {

    const { Meta } = Card;
    function openLink() {
    
      window.open("https://docs.google.com/document/d/1cJVIIuss7w9toTB5cRpwLLPP0EPyeXJmka0mdQuYlmA/edit?usp=sharing", "_blank")
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
     
    />
  </Card>,
      </>
    );
  }

  export default ItineraryCard;