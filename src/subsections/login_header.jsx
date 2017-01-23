import React from 'react';
import {Link} from 'react-router';
import './login_header.css';
const LoginHeader = props =>(
    <nav className="reallocate-header navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/login"><h1 className="txt-primary-light reallocate-heading">ReAllocate+</h1></Link>
            </div>
        </div>
    </nav>
);
export {LoginHeader};
export default LoginHeader;