import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { BoxOfDoughnut, formattedPrice } from "../../dummys";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";

const Modal = ({ product, closeModal }) => {
  const [increaseQuantity, setIncreaseQuantity] = useState(1); // Track the quantity of the product being added

  const increaseValue = () => {
    setIncreaseQuantity((prevQuantity) => prevQuantity + 1); // Increment the quantity
  };

  const decreaseValue = () => {
    setIncreaseQuantity(
      (prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0) // Decrement the quantity but ensure it doesn't go below 0
    );
  };

  const handleAddToCart = () => {
    const cartData = {
      userId: 4, // You can dynamically set the userId if needed
      date: "2020-02-03", // Use the current date or another date if required
      products: [
        {
          productId: product?.id, // Use the product's ID
          quantity: increaseQuantity, // Use the quantity from the state
        },
      ],
    };

    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the Content-Type to JSON
      },
      body: JSON.stringify(cartData), // Send the cart data in the body of the request
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Cart added successfully:", json);
        closeModal(); // Optionally close the modal after the product is added
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <div className="fixed w-screen h-screen bg-[#2D2D2D80] grid place-content-center z-20">
      <div className="bg-white rounded-[20px] py-8 px-4 relative">
        <LiaTimesSolid
          className="absolute top-1 right-3 text-2xl cursor-pointer"
          onClick={closeModal} // Close the modal
        />
        <div>
          <img
            src={product?.image || BoxOfDoughnut}
            alt={product?.title}
            className="w-40 mx-auto"
          />
          <div className="max-w-[500px] mt-5">
            <p className="font-semibold text-lg">{product?.title}</p>
            <p className="text-gray-700">
              {formattedPrice.format(product?.price)}
            </p>
            <p className="text-gray-500 text-[14px]">{product?.description}</p>
          </div>

          <div className="mt-4 flex gap-1 items-center justify-center">
            <span className="bg-[#F5F7FA] rounded-full flex gap-1 shadow-sm items-center px-3">
              <HiMinusSmall
                onClick={decreaseValue}
                className="cursor-pointer"
              />
              <span>{increaseQuantity}</span>
              <HiPlusSmall onClick={increaseValue} className="cursor-pointer" />
            </span>
          </div>

          <div className="flex justify-center mt-3">
            <button
              onClick={handleAddToCart} // Trigger the add to cart function
              className="bg-[#2E3A6E] text-white rounded-full px-6 py-2 mt-2"
            >
              Add {increaseQuantity} for ₦
              {(increaseQuantity * product?.price).toFixed(1)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
