import React from "react";
import { Google, Phone } from "../../dummys";

const Footer = () => {
  return (
    <footer className="md:h-[350px] bg-[#F2F4F7]  mt-[100px] relative">
      <div className="max-w-[1200px] mx-auto  flex md:flex-row flex-col md:justify-between md:items-center h-full">
        {" "}
        <div className="h-full max-w-[277px] flex items-center justify-center ">
          {" "}
          <div className="flex flex-col gap-2 text-[36px] font-semibold text-left">
            <p className="mb-2 text-gray-700">Order Food</p>
            <p className="text-sm sm:text-base text-gray-500">
              Mobile menu is just a tap away. Get it on the Google Play store.
            </p>
            <img src={Google} alt="" className="w-[120px] " />
          </div>
        </div>
        <div className="absolute w-full h-[200px] z-10 bg-white bottom-[-55%] left-0"></div>
        <div className="w-1/2 relative ">
          <img src={Phone} alt="" className="absolute right-0 -top-52 w-fit" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
