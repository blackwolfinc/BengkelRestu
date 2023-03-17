import React, { useState } from "react";
import Footer from "../components/Footer";
import ImageBackground from "../components/ImageBackground";
import Navbar from "../components/Navbar";
import { MenuContext } from "../helpers/context";
import useWindowDimensions from "../helpers/useWindowDimension";
import DummyImage1 from "../assets/img/welding-bg.png";

const MainLayout = ({ children }) => {
  const { height } = useWindowDimensions();
  const [currentMenu, setCurrentMenu] = useState("home"); // home, about, product, ourwork

  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      <div className="max-h-screen w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-primary-light">
        <ImageBackground images={[DummyImage1]}>
          <Navbar />
          <div className="my-10" style={{ minHeight: `${height - 297}px` }}>
            {children}
          </div>
          <Footer />
        </ImageBackground>
      </div>
    </MenuContext.Provider>
  );
};

export default MainLayout;
