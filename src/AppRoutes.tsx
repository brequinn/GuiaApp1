import React, { useState, useEffect } from "react";
// import { User } from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import { useUser } from 'reactfire';
import "firebase/firestore";
import { Home } from './Home';
import { GuideResults } from './GuideResults';
import { GuideDetail } from './GuideDetail';
import { OrderConfirmation } from './OrderConfirmation';
import { MyTrips } from './Trips/MyTrips';
import {
    BrowserRouter,
    Route,
    useParams,
    Switch,
    useLocation,
    Redirect,
  } from "react-router-dom";

export function AppRoutes() {

return (
            <BrowserRouter>
            <Route>
                
                <Route path="/" component={Home} exact /> 
                <Route path="/MyTrips" component={MyTrips} />
                <Route path="/searchResults/:location/:timeframe" component={GuideResults} />
                <Route path="/guide/:guidename/:location/:timeframe" component={GuideDetail} />
                <Route path="/:guidename/:location/:timeframe/confirmation" component={OrderConfirmation} />
                </Route>
            </BrowserRouter>  
             
);
}       
export default AppRoutes;