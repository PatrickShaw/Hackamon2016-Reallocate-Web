import React from 'react';
const Button = props => (
    <a href={props.href}>
        <div className="button">
            <p>{props.text}</p>
        </div>
    </a>
);
export default Button;