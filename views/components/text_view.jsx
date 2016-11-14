import React from 'react';
const TextView = props => (
    <div className="text-view">
        <p className="text-view-text">
            {props.text}
        </p>
    </div>
);
export {TextView};
export default TextView;