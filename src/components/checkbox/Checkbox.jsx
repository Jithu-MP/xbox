import React, { useState } from 'react';
import './style.scss';
const Checkbox = ({title}) => {
  // Use state to manage the checkbox's checked state
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='checkbox'>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          
        />
        {title}
      </label>
    </div>
  );
}

export default Checkbox;






