import React from 'react';
import './navigation_bar_class_type_sub_item.css';
const NavigationBarUnitClassSubItem = ({onClick, class_type}) =>(
    <div onClick={onClick}>
        <p className="item-text">» {class_type}</p>
    </div>
);
export {NavigationBarUnitClassSubItem};
export default NavigationBarUnitClassSubItem;