import React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Button } from "@mui/material";

const ServiceCard = ({ item }) => {
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
        <CardActionArea>
          <Button variant="contained" color="primary">
            Book
          </Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;