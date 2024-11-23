import React, { useState, useEffect } from "react";
import { fetchCategories, fetchProducts } from "../../services/FakeStoreAPI";

const FilterCategory = ({ setFilteredProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  const handleFilter = async (category) => {
    setSelectedCategory(category);
    const allProducts = await fetchProducts();
    const filtered =
      category === "all" ? allProducts : allProducts.filter((item) => item.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Filter by Category</h3>
      <div className="space-x-2">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategory;
