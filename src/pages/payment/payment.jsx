import { Button } from '@mui/material';
import React, { useState } from 'react';
import ButtonAppBar from '../../components/navbar/Navbar';

import './style.scss';


const productData = [
  {
    id: 1,
    name: "RAIN JACKET",
    price:"₹1,499"
  },
  {
    id: 2,
    name: "Minimalist Sunscreen SPF 50 Lightweight with Multi-Vitamins",
    title: "Walking Shoes",
    price:"₹399"
  },
  {
    id: 3,
    name: "RAAYA Leather Winter Woolen Gloves For Girls And Women",
    title: "Walking Shoes",
    description:"Premium PU Leather- Extremely soft and comfortable to wear; wearable and durable. Exquisite Craft- Reliable quality! Brings you the best wearing experience and perfectly highlights your good taste",
    price:"₹349"
  },
];

function Payment() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <ButtonAppBar />
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            {/* <p>{product.description}</p> */}
            <span>Price: {product.price}</span>
          </div>
        ))}
      </div>
      <div className="cart">
      <div className="primary-button">
        <Button variant="contained" color="primary">
          Check out
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
      </div>
      </div>
    </div>
  );
}

export default Payment;
