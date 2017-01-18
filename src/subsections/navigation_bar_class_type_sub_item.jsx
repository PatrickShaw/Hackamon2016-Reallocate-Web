import React from 'react';
import './navigation_bar_class_type_sub_item.css';
const NavigationBarUnitClassSubItem = ({onClick, class_type}) =>(
        <p className="txt-primary-colored" onClick={onClick}>{`\u00bb ${class_type}`}</p>
);
export {NavigationBarUnitClassSubItem};
export default NavigationBarUnitClassSubItem;