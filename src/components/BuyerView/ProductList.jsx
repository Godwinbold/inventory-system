import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/FakeStoreAPI";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.title} className="h-32 w-full object-cover" />
            <h3 className="text-lg font-bold mt-2">{product.title}</h3>
            <p>{product.price} USD</p>
            <button
              className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
