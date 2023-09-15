import React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Button } from "@mui/material";

import dummyimage from "../../assets/images/dummyimage.jpg"

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
    <Card className = "product-wrapper">
      <CardMedia
        className="card-image-wrapper"
        sx={{ height: 92 , width: 92}}
        image={dummyimage}
        title="Dummy Image"
      />
      <CardContent className="card-wrapper">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="button-wrapper">
          <Button variant="contained" color="primary">
            Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;