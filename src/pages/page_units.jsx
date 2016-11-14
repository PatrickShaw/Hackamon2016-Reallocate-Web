import React from 'react';
import {MainLayout} from './page_app';

const UnitsPage = props =>(
    <MainLayout student_id={props.student_id} units={props.units}/>
);

export default UnitsPage;