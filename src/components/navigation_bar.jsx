import React from 'react';
const NavigationBar = props => (
    <aside className="navigation-bar">
        {props.children}
    </aside>
);
export {NavigationBar};
export default NavigationBar;