import React, { useContext } from "react";
import FloatingHubungi from "../../components/FloatingHubungi";
import { MenuContext } from "../../helpers/context";
import AboutText from "../../components/Home/AboutText";
import HomeText from "../../components/Home/HomeText";
import OurWorkText from "../../components/Home/OurWorkText";
import Product from "../../components/Home/Product";
import Map from "../../components/Home/Map";

const Home = () => {
  const { currentMenu } = useContext(MenuContext);
  const menuShowMap = ["home", "about", "ourwork"];

  return (
    <main className="relative mx-auto max-w-lg">
      <HomeText className={`${currentMenu === "home" ? "" : "hidden"}`} />
      <AboutText className={`${currentMenu === "about" ? "" : "hidden"}`} />
      <OurWorkText className={`${currentMenu === "ourwork" ? "" : "hidden"}`} />
      <Product className={`${currentMenu === "product" ? "" : "hidden"}`} />
      <Map
        className={`mt-4 ml-10 ${
          menuShowMap.includes(currentMenu) ? "" : "hidden"
        }`}
      />
      {currentMenu !== "product" && <FloatingHubungi />}
    </main>
  );
};

export default Home;
