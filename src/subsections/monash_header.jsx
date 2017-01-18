import React from 'react';
import './monash_header.css';
import MonashLogo from '../drawables/monash-logo.svg';
import {get_monash_home_page_url} from '../urls/monash_urls';
const MonashHeader = props => (
    <header>
        <h1 className="logo">
            {/* TODO: <a href={get_monash_home_page_url()}>*/}
            <img src={MonashLogo} className="monash-logo" alt="Monash University"/>
            {/*</a> */}
        </h1>
    </header>
);
export {MonashHeader};
export default MonashHeader;