import React from 'react';
import {MainLayout} from '../layouts/layout_main';

const UnitsPage = props =>(
    <MainLayout student_id={props.student_id} units={props.units}/>
);

export default UnitsPage;