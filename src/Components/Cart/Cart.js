import React from "react";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Selected Item: {cart.length}</p>
    </div>
  );
};

export default Cart;
