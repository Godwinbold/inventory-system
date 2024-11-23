import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);

  return response.data;
};
export const fetchCart = async () => {
  const response = await axios.get(`${API_BASE_URL}/carts`);
  console.log(response.data);
  return response.data;
};

fetchCart();

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow or handle the error as needed
  }
};

fetchCategories();
