import React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Button } from "@mui/material";

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
    <Card className = "product">
      <CardContent>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>Price: ${item.price}</span>
        <div className="quantity-section">
          <Button variant="outlined" onClick={handleIncrement}>
            +
          </Button>
          <span>{quantity}</span>
          <Button variant="outlined" onClick={handleDecrement}>
            -
          </Button>
        </div>
        <CardActionArea>
          <Button variant="contained" color="primary">
            Buy
          </Button>
          <Button variant="contained" color="error">
            Rent
          </Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default ItemCard;