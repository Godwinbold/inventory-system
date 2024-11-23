import React from "react";

const AddItem = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      {/* Simulated form for adding items */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border w-full p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          className="border w-full p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
