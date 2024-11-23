import React, { useState } from "react";
import ProductList from "../components/BuyerView/ProductList";
import ShoppingCart from "../components/BuyerView/ShoppingCart";

const BuyerPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default BuyerPage;
