import React from "react";
import { useNavigate } from 'react-router-dom';
import InventoryList from "../components/AdminView/InventoryList";
import AddItem from "../components/AdminView/AddItem";

 
  

const AdminPage = () => {

  const navigate = useNavigate(); // Initialize the hook

  const goToAboutPage = () => {
    navigate('/inventorylist');
  }
  return (
    <div>
      <button onClick={goToAboutPage}>Next</button>
      <AddItem />
      <InventoryList />
    </div>
  );
};

export default AdminPage;
