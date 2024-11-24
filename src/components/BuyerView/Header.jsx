import React from "react";
import { Logo } from "../../dummys";
import { RxCaretDown } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Header = ({ searchText, setSearchText }) => {
  const handleSearchChange = (e) => {
    setSearchText(e.target.value); // Update the searchText when the user types
  };

  const navigate = useNavigate();

  return (
    <header className="bg-[#F2F4F7] shadow-sm">
      <div className="w-full max-w-[1200px] mx-auto py-4 px-4 sm:px-8 flex flex-row justify-between items-center">
        <img src={Logo} className="w-[123px]" alt="Logo" />
        <div className="mt-2 sm:mt-0 flex-1 flex justify-center">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange} // Handle search text change
            placeholder="Search in snacks..."
            className="border bg-white !w-1/3 outline-none border-gray-300 rounded-full px-4 py-2 text-sm sm:w-auto"
          />
        </div>
        <div className="text-gray-600 text-sm sm:text-base flex justify-center items-center gap-1">
          <span className="w-12 h-12 bg-[#2E3A6E] text-white flex items-center justify-center rounded-full"></span>

          <span className="text-base">John Kennedy</span>
          <RxCaretDown />
          <PiShoppingCartThin
            className="mr-2 cursor-pointer"
            onClick={navigate("/cartitem")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
