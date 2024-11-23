import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import BuyerPage from "../pages/BuyerPage";
import AddItem from "../components/AdminView/AddItem";
import InventoryList from "../components/AdminView/InventoryList";
import UpdateItem from "../components/AdminView/UpdateItem";
import CartItem from "../components/BuyerView/CartItem";
import ProductList from "../components/BuyerView/ProductList";
import ShoppingCart from "../components/BuyerView/ShoppingCart";
import LandingPage from "../pages/LandingPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/additem" element={<AddItem />} />

        <Route path="/inventorylist" element={<InventoryList />} />
        <Route path="/updateitem" element={<UpdateItem />} />
        <Route path="/cartitem" element={<CartItem />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
