import React from 'react';
import {Link} from 'react-router';
import './header_reallocate.css';
const MainHeader = props =>(
    <header className="reallocate-header">
        <nav className="container even-space v-center-items">
            <div className="logo">
                <Link to="/"><h1 className="light-text reallocate-heading">ReAllocate+</h1></Link>
            </div>'
            <div className="main-navigation">
                <Link className="nav-item" to="/">Home</Link>
                <a href="https://allocate.timetable.monash.edu/aplus-2016/student">Timetable</a>
                <Link className="nav-item" to="/">My Requests</Link>
                <Link className="nav-item" to="/">Preferences</Link>
                <Link className="nav-item" to="/">Help</Link>
                <Link className="nav-item" to="/login">Logout</Link>
            </div>
        </nav>
    </header>
);
export {MainHeader};
export default MainHeader;