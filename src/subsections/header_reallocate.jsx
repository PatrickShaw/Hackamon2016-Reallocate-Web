import React from 'react';
import {Link} from 'react-router';
import './reallocate_header.css';
const MainHeader = props =>(
    <header className="reallocate-header">
        <nav className="container v-center-items">
            <div className="logo">
                <Link to="/"><h1 className="light-text reallocate-heading">ReAllocate+</h1></Link>
            </div>'
            <div className="main-navigation">
                <Link to="/">Home</Link>
                <a href="https://allocate.timetable.monash.edu/aplus-2016/student">Timetable</a>
                <Link to="/">My Requests</Link>
                <Link to="/">Preferences</Link>
                <Link to="/">Help</Link>
                <Link to="/login">Logout</Link>
            </div>
        </nav>
    </header>
);
export {MainHeader};
export default MainHeader;