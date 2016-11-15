import React from 'react';
const NavigationBarUnitItem = props =>(
    <section className="unit-item">
        <h1> {props.unit.uuid}</h1>
        <h2> {props.unit.title}</h2>
    </section>
);
export {NavigationBarUnitItem};
export default NavigationBarUnitItem;