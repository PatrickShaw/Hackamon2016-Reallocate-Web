import React from 'react';
const EditText = props => (
        <div className="edit-text">
            <p className="edit-text-hint">{props.hint}</p>
            <input type="text" name={props.name}/>
        </div>
);
export {EditText};
export default EditText;