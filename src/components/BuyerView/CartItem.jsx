import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import { BoxOfDoughnut } from "../../dummys"; 
import  RiceAndStew  from "../../assets/images/RiceAndStew.jpg";
import BurgerAndFries from "../../assets/images/BurgerAndFries.jpg"


const SnacksComponent = () => {
  const snacks = [
    { id: 1, name: "Box of Doughnuts", price: "₦2000", image: BoxOfDoughnut },
    { id: 2, name: "Burger and Fries", price: "₦2500", image: BurgerAndFries },
    { id: 3, name: "Rice and Stew", price: "₦1500", image: RiceAndStew},
    { id: 4, name: "Box of Doughnuts", price: "₦2000", image: BoxOfDoughnut },
    { id: 5, name: "Burger and Fries", price: "₦2500", image: BurgerAndFries },
    { id: 6, name: "Rice and Stew", price: "₦1500", image: RiceAndStew },
    { id: 7, name: "Box of Doughnuts", price: "₦2000", image: BoxOfDoughnut },
    { id: 8, name: "Burger and Fries", price: "₦2500", image: BurgerAndFries },
    { id: 9, name: "Rice and Stew", price: "₦1500", image: RiceAndStew },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white p-5 border-r border-gray-200">
          <h3 className="text-lg font-bold mb-4">More Categories</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Snacks</li>
            <li className="hover:text-blue-500 cursor-pointer">Parcels</li>
            <li className="hover:text-blue-500 cursor-pointer">Drinks</li>
            <li className="hover:text-blue-500 cursor-pointer">Food</li>
            <li className="hover:text-blue-500 cursor-pointer">Others</li>
          </ul>
        </aside>

        {/* Snacks Grid */}
        <main className="w-4/5 p-5">
          <h2 className="text-2xl font-bold mb-6">Snacks</h2>
          <div className="grid grid-cols-3 gap-6">
            {snacks.map((snack) => (
              <div
                key={snack.id}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={snack.image}
                  alt={snack.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{snack.name}</h3>
                <p className="text-blue-500 font-semibold">{snack.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Order Food</h3>
            <p className="text-gray-500 mb-4">
              Make online food orders with the app. You can get it on the Google Play Store.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Get the App
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SnacksComponent;
