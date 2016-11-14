import React from 'react';
import './card.css';
const Card = props => (
    <div className="card" {...props}>
        {props.children}
    </div>
);
export {Card};
export default Card;