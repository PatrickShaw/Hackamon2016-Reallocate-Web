import React from 'react';
import './monash_header.css';
import MonashLogo from '../drawables/monash-logo.svg';
import {get_monash_home_page_url} from '../urls/monash_urls';
const MonashHeader = props => (
    <header className="monash-header navbar">
        <a href={get_monash_home_page_url()} className="navbar-brand">
            <img src={MonashLogo} className="monash-logo" alt="Monash University"/>
        </a>
    </header>
);
export {MonashHeader};
export default MonashHeader;