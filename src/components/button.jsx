import React from 'react';
import {TextView} from './text_view';
import './button.css';
const Button = props => (
    <a href={props.href} className="button-link">
        <div className="button-text-container">
            <TextView text={props.text}/>
        </div>
    </a>
);
export {Button};
export default Button;