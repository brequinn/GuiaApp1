import React, { useState, useEffect } from "react";
// import { User } from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import { useUser } from 'reactfire';
import "firebase/firestore";
import { Home } from './Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export function AppRoutes() {
// const user = useUser();

// useEffect(() => {
//     const user = firebase.auth().currentUser;
//     console.log(user);
//   }, []);

return (
            <BrowserRouter>
                
                <Route path="*" component={Home} exact /> 
            </BrowserRouter>   
);
}       
export default AppRoutes;