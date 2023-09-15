import { useState } from 'react';
import "./style.css";

// eslint-disable-next-line react/prop-types
function Popup({ trigger, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popover">
      <div className="popover-trigger" onClick={togglePopover}>
        {trigger}
      </div>
      {isOpen && (
        <div className="popover-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Popup;
