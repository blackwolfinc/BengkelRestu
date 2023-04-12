import React, { useState } from "react";
import Footer from "../components/Footer";
import ImageBackground from "../components/ImageBackground";
import Navbar from "../components/Navbar";
import { MenuContext } from "../helpers/context";
import useWindowDimensions from "../helpers/useWindowDimension";
import DummyImage1 from "../assets/img/welding-bg.png";
import DummyImage2 from "../assets/img/welding-bg-2.png";

const MainLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  const [currentMenu, setCurrentMenu] = useState("home"); // home, about, product, ourwork, detailproduct
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(0);
  const menuControlActive = ["home", "about", "ourwork"];

  return (
    <MenuContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        selectedDetailProduct,
        setSelectedDetailProduct,
      }}
    >
      <div className="max-w-screen overflow-x-hidden">
        <ImageBackground
          images={[DummyImage1, DummyImage2]}
          disabled={width < 1280}
          control={menuControlActive.includes(currentMenu)}
          times={10000}
        >
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ImageBackground>
      </div>
    </MenuContext.Provider>
  );
};

export default MainLayout;
