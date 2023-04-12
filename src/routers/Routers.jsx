import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <MainLayout>
            <Product />
          </MainLayout>
        }
      />
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
};

export default Routers;
