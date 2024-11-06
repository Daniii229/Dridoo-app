// InputField.js
import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css'; // Optional for styling

const Input = ({ label, placeholder, type = "text", onChange, value }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange} // Handles input change
                value={value} // Controlled input value
                className="input"
            />
        </div>
    );
};

// Default props (optional, but useful)
Input.defaultProps = {
    type: "text", // Default type is text
};

// Prop types for validation (optional, but recommended)
Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;


// // InputField.js


// import React from 'react';
// import './InputField.css'; // Optional for styling

// const Input = ({ label, placeholder, type, onChange, value }) => {
//     return (
//         <div className="input-field">
//             <label>{label}</label>
//             <input
//                 type={type}
//                 placeholder={placeholder}
//                 onChange={onChange}
//                 value={value}
//                 className="input"
//             />
//         </div>
//     );
// };

// // Default props


// // Prop types for validation


// export default Input;
