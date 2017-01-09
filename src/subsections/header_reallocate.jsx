import React from 'react';
import {Link} from 'react-router';
import {HeaderNavButton} from '../components/button_nav.jsx';
const MainHeader = props =>(
    <header className="background-1">
        <nav className="container">
            <h1 className="reallocate-heading logo"><Link className="txt-primary-light" to="/">ReAllocate+</Link></h1>
            <HeaderNavButton to="/">Home</HeaderNavButton>
            <HeaderNavButton to="https://allocate.timetable.monash.edu/aplus-2016/student">Timetable</HeaderNavButton>
            <HeaderNavButton to="/">My Requests</HeaderNavButton>
            <HeaderNavButton to="/">Preferences</HeaderNavButton>
            <HeaderNavButton to="/">Help</HeaderNavButton>
            <HeaderNavButton to="/">Logout</HeaderNavButton>
        </nav>
    </header>
);
export {MainHeader};
export default MainHeader;