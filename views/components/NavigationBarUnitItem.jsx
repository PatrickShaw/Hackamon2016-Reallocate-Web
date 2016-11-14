import React from 'react';
const NavigationBarUnitItem = props =>(

    <section>
        <h1> {props.unit.uuid}</h1>
        <h2> {props.unit.title}</h2>
    </section>

);

export default NavigationBarUnitItem;