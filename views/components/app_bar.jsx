import React from 'react';
import {Toolbar} from './Toolbar';
const AppBar = props => (
    <Toolbar>
        <h1>{props.title}</h1>
    </Toolbar>
);
export {AppBar};
export default AppBar;