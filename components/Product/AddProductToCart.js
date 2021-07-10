import React from "react";
import { Input } from "semantic-ui-react";

function AddProductToCart() {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Input
      type="number"
      min="1"
      value={quantity}
      placeholder="Quantity"
      onChange={(event) => setQuantity(Number(event.target.value))}
      action={{ color: "orange", content: "Add to Cart", icon: "plus cart" }}
    />
  );
}

export default AddProductToCart;
