import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import NotFound from './pages/page_not_found';
import LoginPage from './pages/page_login';
import {MainLayout} from './layouts/section_main';
import {WelcomeSection} from './subsections/section_welcome';
import {UnitClassesSection} from './pages/section_unit_classes';
const Routes = props =>(
    <Router {...props}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={WelcomeSection}/>
            <Route path="classes(/:uuid)(/:class_type)" component={UnitClassesSection}/>
        </Route>
        <Route path="/login" component={LoginPage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);
export default Routes;