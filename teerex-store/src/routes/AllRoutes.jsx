import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
