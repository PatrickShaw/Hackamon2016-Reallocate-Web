import React from 'react';
const NavigationBarUnitClassSubItem = ({onClick, class_type}) =>(
    <div onClick={onClick}>
        <p className="txt-primary-colored">»  {class_type}</p>
    </div>
);
export {NavigationBarUnitClassSubItem};
export default NavigationBarUnitClassSubItem;