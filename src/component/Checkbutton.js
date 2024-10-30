import React, { useState } from 'react';

const Checkbutton = () => {
  // State to keep track of whether the checkbox is checked
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleChange = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleChange} 
        />
        {isChecked ? ' ' : ' '}
      </label>
    </div>
  );
};

export default Checkbutton;
