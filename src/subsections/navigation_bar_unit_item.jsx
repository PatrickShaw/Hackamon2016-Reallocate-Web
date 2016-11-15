import React from 'react';
import './navigation_bar_unit_item.css';
const NavigationBarUnitItem = ({unit, onClick, children}) =>(
    <div className="navigation-bar-unit-item">
        <div className="unit-info">
            <h1 className="text-primary-colored">{unit.uuid}</h1>
            <h2 className="text-primary-colored">{unit.title}</h2>
        </div>
        {children}
    </div>
);
export {NavigationBarUnitItem};
export default NavigationBarUnitItem;