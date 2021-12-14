import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom'


export function ItineraryCard( {guide} : {guide:any}) {

    const { Meta } = Card;
    function openLink() {
    
      window.open(`${guide.TripItineraryLink}`, "_blank")
      
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
      title="Trip Itinerary"  
     
    />
  </Card>,
      </>
    );
  }

  export default ItineraryCard;