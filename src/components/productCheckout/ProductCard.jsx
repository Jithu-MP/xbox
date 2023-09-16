import React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Button } from "@mui/material";

import dummyimage from "../../assets/images/dummyimage.jpg"

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className="product-wrapper">
      <CardMedia
        className="card-image-wrapper"
        sx={{ height: 92 , width: 92}}
        image={dummyimage}
        title="Dummy Image"
      />
      <CardContent className="card-wrapper">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>Price: {item.price}</span>
        <div className="button-wrapper">
          <div className="quantity-section">
            <Button variant="outlined" onClick={handleIncrement}>
              +
            </Button>
            <span>{quantity}</span>
            <Button variant="outlined" onClick={handleDecrement}>
              -
            </Button>
          </div>
          <div className="primary-button">
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
            <Button variant="contained" color="error">
              Rent
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;