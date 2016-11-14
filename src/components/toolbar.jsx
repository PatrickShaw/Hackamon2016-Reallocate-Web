import React from 'react';
import './toolbar';
const Toolbar = props => (
    <header className="toolbar">
        {props.children}
    </header>
);
export {Toolbar};
export default Toolbar;