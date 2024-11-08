import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../component/DropdownInput.css';

const DropdownInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const options = ['Saddar', 'Faizabad', 'Multan', 'islmabad', 'england', 'europe'];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className='DropdownInput' style={{ position: 'relative',  }}>
        <lable>{props.label}</lable>
      <input
        
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(!!inputValue)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        placeholder="Select an option"
      />
      {showDropdown && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            border: '1px solid #ccc',
            backgroundColor: 'white',
            maxHeight: '150px',
            overflowY: 'auto',
            padding: '0',
            margin: '0',
            listStyleType: 'none',
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onMouseDown={() => handleOptionClick(option)}
                style={{ padding: '8px', cursor: 'pointer' }}
              >
                {option}
              </li>
            ))
          ) : (
            <li style={{ padding: '8px', color: '#888' }}>No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};


DropdownInput.propTypes = {
  label: PropTypes.string.isRequired
}
export default DropdownInput;
