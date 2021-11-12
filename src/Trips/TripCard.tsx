import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import firebase from 'firebase/compat/app';
import { Header } from '../Header';


export function TripCard() {

    const { Meta } = Card;

    return (
      <>
      
      <Card
    style={{ width: 300, marginLeft: 200 }}
    cover={
      <img
        alt="example"
        src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80s"
      />
    }
  
  >
    <Meta
      avatar={<Avatar src="http://static4.businessinsider.com/image/559db20cecad04d238ab062d-400-300/getting-lost-around-havana-was-our-favorite-part-business-insiders-senior-video-producer-graham-flanagan-checked-a-map-while-front-end-developer-tyler-greenfield-wearing-a-matching-hat-spoke-to-a-cuban-man-on-the-street-the-local-was-trying-to-sell-them-black-market-currency.jpg" />}
      title="Trip to London"
      description="Tyler is your host for your trip to London from 11/5 to 12/ 9"
    />
  </Card>,
      </>
    );
  }

  export default TripCard;