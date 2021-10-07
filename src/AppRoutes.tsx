import React from 'react';
// import { User } from 'firebase/app';
import { useUser } from 'reactfire';
import { Login } from './Login';
import { Home } from './Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export function AppRoutes() {
const user = useUser();

return (
            <BrowserRouter>
                
                <Route path="/" component={Home} exact />
                <Route exact path="*">
                    {user ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                {/* <Route path="/dashboard" component={Overview} />
                <Route path="/accountsettings" element={<AccountSettings />} /> */}
              
                
            </BrowserRouter>   
);
}       
export default AppRoutes;