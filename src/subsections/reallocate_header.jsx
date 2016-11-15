import React from 'react';
import Toolbar from '../components/toolbar';
import './reallocate_header.css';
import MonashLogo from '../drawables/monash-logo.png';
import {get_monash_home_page_url} from '../urls/monash_urls';
const ReAllocateHeader = props =>(
    <Toolbar>
        <header className="monash-header">
            <a href={get_monash_home_page_url()}>
                <img src={MonashLogo} className="monash-logo" alt="Monash University"/>
            </a>
        </header>
        <header className="reallocate-header">
            <h1>ReAllocate+</h1>
        </header>
    </Toolbar>
);
export {ReAllocateHeader};
export default ReAllocateHeader;