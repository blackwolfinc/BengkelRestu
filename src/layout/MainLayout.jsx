import React, { useState } from "react";
import Footer from "../components/Footer";
import ImageBackground from "../components/ImageBackground";
import Navbar from "../components/Navbar";
import { MenuContext } from "../helpers/context";
import useWindowDimensions from "../helpers/useWindowDimension";
import DummyImage1 from "../assets/img/welding-bg.png";
import DummyImage2 from "../assets/img/welding-bg-2.png";

const MainLayout = ({ children }) => {
  const { width, height } = useWindowDimensions();
  const [currentMenu, setCurrentMenu] = useState("home"); // home, about, product, ourwork
  const menuControlActive = ["home", "about", "ourwork"];

  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      <div className="w-screen overflow-x-hidden">
        <ImageBackground
          images={[DummyImage1, DummyImage2]}
          disabled={width < 1280}
          control={menuControlActive.includes(currentMenu)}
        >
          <Navbar />
          <div style={{ minHeight: `${height - 256}px` }}>{children}</div>
          <Footer />
        </ImageBackground>
      </div>
    </MenuContext.Provider>
  );
};

export default MainLayout;
