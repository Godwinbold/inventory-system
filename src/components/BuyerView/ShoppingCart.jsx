import React from "react";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 rounded mb-2">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>{item.price} USD</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
