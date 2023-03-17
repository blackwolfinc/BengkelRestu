import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

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
      ></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
};

export default Routers;
