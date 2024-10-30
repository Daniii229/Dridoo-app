// InputField.js

import PropTypes from 'prop-types';
import React from 'react';
import './InputField.css'; // Optional for styling

const Input = ({ label, placeholder, type, onChange }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="input"
            />
        </div>
    );
};

// Default props


// Prop types for validation
Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
