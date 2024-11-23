import React, { useState } from "react";

const UpdateItem = ({ selectedItem, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState(selectedItem);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedItem);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Update Item</h3>
      {selectedItem ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={updatedItem.title || ""}
            onChange={handleChange}
            placeholder="Product Name"
            className="border w-full p-2 rounded"
          />
          <input
            type="number"
            name="price"
            value={updatedItem.price || ""}
            onChange={handleChange}
            placeholder="Price"
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            name="category"
            value={updatedItem.category || ""}
            onChange={handleChange}
            placeholder="Category"
            className="border w-full p-2 rounded"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Update
          </button>
        </form>
      ) : (
        <p>Select an item to update.</p>
      )}
    </div>
  );
};

export default UpdateItem;
