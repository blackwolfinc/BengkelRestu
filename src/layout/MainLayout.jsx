import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MenuContext } from "../helpers/context";
import useWindowDimensions from "../helpers/useWindowDimension";

const MainLayout = ({ children }) => {
  const { height } = useWindowDimensions();
  const [currentMenu, setCurrentMenu] = useState("home"); // home, about, product, ourwork

  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      <div className="max-h-screen w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-primary-light">
        <div className="bg relative mx-auto min-h-screen">
          <Navbar />
          <div className="my-10" style={{ minHeight: `${height - 297}px` }}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </MenuContext.Provider>
  );
};

export default MainLayout;
