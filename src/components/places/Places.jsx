import { useState } from "react";
import Popup from "../popup/popup";

const Places = ({ top, left }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to show the popup on hover
  const handleMouseEnter = () => {
    setPopupVisible(true);
    console.log("hovered...");
  };

  // Function to hide the popup when the mouse leaves
  const handleMouseLeave = () => {
    setPopupVisible(false);
  };
  return (
    <div style={{transition: "all 0.3s ease-out"}}
      className="pin "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "absolute", top: top, left: left }}
    >
      {isPopupVisible && <Popup top={"-20px"} left={"250px"} />}
      <img src="public/assets/pin.png" alt="pin" />
    </div>
  );
};

export default Places;
