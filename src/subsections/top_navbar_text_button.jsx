import React from 'react';
import {TopNavbarButton} from './top_navbar_button';
const TopNavbarTextButton = props => (
    <TopNavbarButton>
        {props.children}
    </TopNavbarButton>
);
export {TopNavbarTextButton};
export default TopNavbarTextButton;