import React, { useState, useEffect } from "react";
// import { User } from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import { useUser } from 'reactfire';
import "firebase/firestore";
import { Login } from './Login';
import { Home } from './Home';
import { Overview } from './Overview';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export function AppRoutes() {
const user = useUser();

// useEffect(() => {
//     const user = firebase.auth().currentUser;
//     console.log(user);
//   }, []);

return (
            <BrowserRouter>
                
                <Route path="/" component={Home} exact />
                <Route exact path="*">
                    {user ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <Route path="/dashboard" component={Overview} />
                
            </BrowserRouter>   
);
}       
export default AppRoutes;