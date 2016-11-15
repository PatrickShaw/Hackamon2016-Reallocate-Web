import React from 'react';
import {TopNavbarTextButton} from './top_navbar_text_button';
import {Link} from 'react-router';
import './reallocate_header.css';
import './main_header.css';
const MainHeader = props =>(
        <nav className="reallocate-header navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/"><h1 className="navbar-brand light-text reallocate-heading">ReAllocate+</h1></Link>
                </div>
                <div className="collapse navbar-collapse top-navigation">
                    <ul className="nav navbar-nav navbar-right">
                        <TopNavbarTextButton><Link to="/">Home</Link></TopNavbarTextButton>
                        <TopNavbarTextButton><a href="https://allocate.timetable.monash.edu/aplus-2016/student">Timetable</a></TopNavbarTextButton>
                        <TopNavbarTextButton><Link to="/">My Requests</Link></TopNavbarTextButton>
                        <TopNavbarTextButton><Link to="/">Preferences</Link></TopNavbarTextButton>
                        <TopNavbarTextButton><Link to="/">Help</Link></TopNavbarTextButton>
                        <TopNavbarTextButton><Link to="/login">Logout</Link></TopNavbarTextButton>
                    </ul>
                </div>
            </div>
        </nav>
);
export {MainHeader};
export default MainHeader;