import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import firebase from 'firebase/compat/app';
import { Link, useParams } from "react-router-dom";
import { Header } from '../Header';


export function TripCard( {guide} : {guide:any}) {

    const { Meta } = Card;

    return (
      <>
  <Link to="/TripOverview">
   
      <Card
    style={{ width: 300, marginLeft: 200 }}
    cover={
      <img
        alt="example"
        src="https://media.istockphoto.com/photos/taxis-in-times-square-with-7th-avenue-new-york-city-manhattan-picture-id1277102943?b=1&k=20&m=1277102943&s=170667a&w=0&h=tp_vCWDpgrKsUBtl2ZI-8yy2fMHtoZJPcaZBTcnN9nc="
      />
    }
  
  >
    <Meta
      avatar={<Avatar src="http://static4.businessinsider.com/image/559db20cecad04d238ab062d-400-300/getting-lost-around-havana-was-our-favorite-part-business-insiders-senior-video-producer-graham-flanagan-checked-a-map-while-front-end-developer-tyler-greenfield-wearing-a-matching-hat-spoke-to-a-cuban-man-on-the-street-the-local-was-trying-to-sell-them-black-market-currency.jpg" />}
      title={`Trip to ${guide.tripLocation}`}   
      description= {`${guide.guideName} is your host for your trip to ${guide.guideLocation} from ${guide.tripTimeframe}`}  
     
    />
  </Card>,
  </Link>
      </>
    );
  }

  export default TripCard;