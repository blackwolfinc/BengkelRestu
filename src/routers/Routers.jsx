import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
};

export default Routers;
