import React from "react";
import InventoryList from "../components/AdminView/InventoryList";
import AddItem from "../components/AdminView/AddItem";

const AdminPage = () => {
  return (
    <div>
      <AddItem />
      <InventoryList />
    </div>
  );
};

export default AdminPage;
