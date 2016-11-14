import React from 'react';
import {TextView} from './text_view';
const Button = props => (
    <a href={props.href} className="button">
        <TextView text={props.text}/>
    </a>
);
export {Button};
export default Button;