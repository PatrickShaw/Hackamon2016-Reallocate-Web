import React from 'react';
import {TextView} from './text_view';
import './button.css';
const Button = ({href, text, ...other}) => (
    <a href={href} className="button-link" {...other}>
        <div className="button-text-container">
            <TextView text={text}/>
        </div>
    </a>
);
export {Button};
export default Button;