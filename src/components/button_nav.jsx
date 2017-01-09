import React from 'react';

import {Link} from 'react-router';
const HeaderNavButton = ({children, to}) => (
    <Link className="btn background-1" to={to}>{children}</Link>
);
export {HeaderNavButton};