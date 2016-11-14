import React from 'react';
import {Router, Route} from 'react-router';
import App from './pages/page_app';
import NotFound from './pages/page_not_found';
import LoginPage from './pages/page_login';
const Routes = props =>(
    <Router {...props}>
        <Route path="/home" component={App}/>
        <Route path="/" component={LoginPage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);
export default Routes;