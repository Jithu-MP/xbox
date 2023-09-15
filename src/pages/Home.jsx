import ButtonAppBar from "../components/navbar/Navbar";
import Popup from "../components/popup/popup";
import React from "react";
import ItemCard from "../components/productCheckout/ProductCard";
const cardData = [
  {
    name: 'Jacket',
    description: 'abc',
    price: '123'
  }
];

const HomePage = () => {
  return (
    <div style={{ background: "red", height: "100vh" }}>
        <ItemCard item={{
    name: 'Jacket',
    description: 'abc',
    price: '123'
  }} />
    </div>
  );
};

export default HomePage;
