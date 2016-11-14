import React from 'react';
import './edit_text.css';
const EditText = props => (
        <div className="edit-text">
            <p className="edit-text-hint">{props.hint}</p>
            <input type="text" className="edit-text-input-box" name={props.name}/>
            <p className="edit-text-error">{props.error}</p>
        </div>
);
export {EditText};
export default EditText;