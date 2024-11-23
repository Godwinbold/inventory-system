import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
   <Header/>
      {/* <Header /> */}
      <div className="bg-[#2E3A6E]">
        <div className="flex items-center"></div>
      </div>
      <Footer/>
    </>
   
  );
};

export default CartItem;
