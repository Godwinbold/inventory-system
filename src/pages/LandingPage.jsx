import React, { useEffect, useState } from "react";
import Header from "../components/BuyerView/Header";
import { RxCaretRight } from "react-icons/rx";
import { fetchProducts, fetchCategories } from "../services/FakeStoreAPI";
import { formattedPrice } from "../dummys";
import Footer from "../components/BuyerView/Footer";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import Modal from "../components/BuyerView/Modal";

const SnacksPage = () => {
  const [data, setData] = useState({ products: [], categories: [] });
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [filteredProducts, setFilteredProducts] = useState([]); // Track filtered products
  const [searchText, setSearchText] = useState(""); // Track search text
  const [loading, setLoading] = useState(true); // Track loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product details for the modal

  // Load data and filter products based on category
  useEffect(() => {
    const loadData = async () => {
      const products = await fetchProducts();
      const categories = await fetchCategories();
      setData({ products, categories });

      // Initially show all products when no category is selected
      setFilteredProducts(products);
      setLoading(false); // Data is loaded, set loading to false
    };
    loadData();
  }, []);

  useEffect(() => {
    let productsToDisplay = data.products;

    // Filter products by selected category
    if (selectedCategory) {
      productsToDisplay = productsToDisplay.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter products by search text
    if (searchText) {
      productsToDisplay = productsToDisplay.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(productsToDisplay);
  }, [selectedCategory, data.products, searchText]); // Run this effect when selectedCategory, products, or searchText change

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header searchText={searchText} setSearchText={setSearchText} />

        {/* Content */}
        <main className="w-full max-w-[1200px] mx-auto flex gap-4 mt-10 ">
          {/* Sidebar */}
          <aside className="bg-white-md w-1/6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {data?.categories?.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)} // Handle category click
                  className="text-gray-700 pl-4 hover:text-blue-500 cursor-pointer border-b border-b-[#DFE2E9] capitalize text-nowrap"
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Snacks Grid */}
          <section className="pt-1 w-5/6">
            <div className="flex gap-2 items-center">
              Categories <RxCaretRight />{" "}
              {selectedCategory ? selectedCategory : "All"}
            </div>

            {/* Loading Spinner */}
            {loading ? (
              <div className="flex justify-center flex-col gap-3 items-center h-96">
                <FaSpinner className="animate-spin text-blue-500 text-4xl" />
                <p className="text-center">Loading...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts?.map((snack) => (
                  <div
                    key={snack?.id}
                    onClick={() => openModal(snack)} // Open modal on product click
                    className="bg-white rounded-md shadow-md p-4 text-center flex flex-col cursor-pointer"
                  >
                    <div className="h-[241px] overflow-hidden rounded-md mb-4 shadow-sm">
                      <img
                        src={snack?.image}
                        alt={snack?.title}
                        className="object-contain h-full w-full max-w-full "
                      />
                    </div>

                    <h3 className="text-base text-left sm:text-lg text-[#0A1853] text-[20px] font-semibold mb-2">
                      {snack?.title.substring(0, 20)}
                    </h3>
                    <p className="text-gray-700 text-left">
                      {formattedPrice.format(snack?.price)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default SnacksPage;
