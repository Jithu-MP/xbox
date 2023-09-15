import React from "react";
import "./style.scss"; // You can create this CSS file for styling
import CheckBoxPopup from "../checkbox/Checkbox";


const cardData = [
  {
    id: 1,
    title: "Jacket",
  },
  {
    id: 2,
    title: "Shoes",
  },
  {
    id: 3,
    title: "Cap",
  },
  {
    id: 4,
    title: "Goggles",
  },
  // Add more card data objects as needed
];

const Popup = ({ top, left }) => {
  return (
   
    <div className="card" style={{ top: top, left: left }}>
      <div className="card-content">
        <h2>Products</h2>
        <div className="c">
          <div className="p">
            {cardData.map((c) => (
              <CheckBoxPopup key={c.id} title={c.title} />
            ))}
          </div>
          <div className="t">
            <div className="location">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
              <path  d="M8.65701 11.25C8.65701 8.29873 11.0495 5.90625 14.0008 5.90625C16.952 5.90625 19.3445 8.29873 19.3445 11.25C19.3445 14.2013 16.952 16.5938 14.0008 16.5938C11.0495 16.5938 8.65701 14.2013 8.65701 11.25ZM14.0008 7.59375C11.9815 7.59375 10.3445 9.23071 10.3445 11.25C10.3445 13.2693 11.9815 14.9062 14.0008 14.9062C16.0201 14.9062 17.657 13.2693 17.657 11.25C17.657 9.23071 16.0201 7.59375 14.0008 7.59375Z" fill="black"/>
              <path  d="M4.46567 9.96396C4.86429 5.12802 8.90546 1.40625 13.7578 1.40625H14.2437C19.0961 1.40625 23.1372 5.12802 23.5359 9.96396C23.75 12.5617 22.9475 15.1413 21.2976 17.1591L15.9054 23.7537C14.921 24.9575 13.0805 24.9575 12.0962 23.7537L6.70397 17.1591C5.05398 15.1413 4.25154 12.5617 4.46567 9.96396ZM13.7578 3.09375C9.78369 3.09375 6.47394 6.14191 6.14747 10.1026C5.96925 12.2647 6.6371 14.4115 8.01034 16.091L13.4025 22.6855C13.7117 23.0636 14.2898 23.0636 14.599 22.6855L19.9912 16.091C21.3644 14.4115 22.0323 12.2647 21.8541 10.1026C21.5276 6.14191 18.2178 3.09375 14.2437 3.09375H13.7578Z" fill="black"/>
              </svg></span>
              <h2>Biarritz, FR</h2>
            </div>
            <p>Tuesday</p>
            <span>20 Jun 2022</span>
            <p>29 °C</p>
            <span>Sunny</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
