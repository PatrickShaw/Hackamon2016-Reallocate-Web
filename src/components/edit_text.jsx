import React from 'react';
import './edit_text.css';
const EditText = ({hint, name, error, ...other}) => (
        <div className="edit-text">
            <p className="edit-text-hint">{hint}</p>
            <input type="text" className="edit-text-input-box" name={name} {...other}/>
            <p className="edit-text-error">{error}</p>
        </div>
);
export {EditText};
export default EditText;