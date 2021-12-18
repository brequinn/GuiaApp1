import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import firebase from 'firebase/compat/app';
import { Link, useParams } from "react-router-dom";
import { Header } from '../Header';


export function GuideTripCard( {guide} : {guide:any}) {

    const { Meta } = Card;

    return (
      <>
  <Link to={`/tripDetail/${guide.tripID}`}>

   
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
      avatar={<Avatar src={guide.travelerPhoto} />}
      title={`Trip to ${guide.tripLocation}`}   
      description= {`You are guiding ${guide.travelerName} for their trip to ${guide.tripLocation} from ${guide.tripTimeframe}`}  
     
    />
  </Card>,
  </Link>
      </>
    );
  }

  export default GuideTripCard;