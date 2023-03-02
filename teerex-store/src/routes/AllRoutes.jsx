import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Store from "../pages/Store";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
