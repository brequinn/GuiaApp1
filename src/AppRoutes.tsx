import React, { useState, useEffect } from "react";
// import { User } from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import { useUser } from 'reactfire';
import "firebase/firestore";
import { Home } from './Home';
import { GuideResults } from './GuideResults';
import { GuideDetail } from './GuideDetail';
import { MyTrips } from './MyTrips';
import {
    BrowserRouter,
    Route,
    useParams,
    Switch,
    useLocation,
    Redirect,
  } from "react-router-dom";

export function AppRoutes() {
// const user = useUser();

// useEffect(() => {
//     const user = firebase.auth().currentUser;
//     console.log(user);
//   }, []);

return (
            <BrowserRouter>
            <Route>
                
                <Route path="/" component={Home} exact /> 
                <Route path="/MyTrips" component={MyTrips} />
                <Route path="/searchResults" component={GuideResults} />
                <Route path="/guideDetail" component={GuideDetail} />
                </Route>
            </BrowserRouter>  
             
);
}       
export default AppRoutes;