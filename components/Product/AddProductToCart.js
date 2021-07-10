import React from "react";
import { Input } from "semantic-ui-react";
import { Router, useRouter } from "next/router";

function AddProductToCart({ user }) {
  const [quantity, setQuantity] = React.useState(1);
  const router = useRouter();

  return (
    <Input
      type="number"
      min="1"
      value={quantity}
      placeholder="Quantity"
      onChange={(event) => setQuantity(Number(event.target.value))}
      action={
        user
          ? { color: "orange", content: "Add to Cart", icon: "plus cart" }
          : {
              color: "blue",
              content: "Sign Up To Purchase",
              icon: "signup",
              onClick: () => router.push("/signup"),
            }
      }
    />
  );
}

export default AddProductToCart;
