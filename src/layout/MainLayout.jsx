import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-w-screen">
      <div className="bg relative mx-auto min-h-screen pb-[120px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
