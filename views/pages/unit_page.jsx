import React from 'react';
import MainLayout from '../layout/layout_main';

const Page = props =>(

    <MainLayout student_id={props.student_id} units={props.units}/>
);

export default Page;