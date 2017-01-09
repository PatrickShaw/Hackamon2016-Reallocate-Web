import React from 'react';
import {Link} from 'react-router';
import './header_reallocate.css';
import './login_header.css';
const LoginHeader = props =>(
    <nav className="reallocate-header navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/login"><h1 className="navbar-brand light-text reallocate-heading">ReAllocate+</h1></Link>
            </div>
        </div>
    </nav>
);
export {LoginHeader};
export default LoginHeader;