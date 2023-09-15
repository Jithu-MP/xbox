import React from 'react';
import './style.scss'; // You can create this CSS file for styling
import CheckBoxPopup from "../checkbox/Checkbox";

const cardData = [
    {
      id: 1,
      title: 'Jacket',
    },
    {
      id: 2,
      title: 'Shoes',
    },
    {
        id: 3,
        title: 'Cap',
      },
      {
        id: 4,
        title: 'Goggles',
      },
    // Add more card data objects as needed
  ];

const Popup = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Products</h2>
        <div className='c'>
            <div className='p'>
            {cardData.map((c) => (
        <CheckBoxPopup
          key={c.id}
          title={c.title}
        />
      ))}

            </div>
            <div className='t'>
                <h2>Biarritz, FR</h2>
                <p>Tuesday</p>
                <p>20 Jun 2022</p>
                <p>29 °C</p>
                <p>Sunny</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;