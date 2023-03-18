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
    <>
      <main className="relative mx-auto my-10 max-w-lg max-desktop:my-0 max-desktop:flex max-desktop:flex-col max-desktop:bg-primary-dark-2">
        <HomeText
          className={`${
            currentMenu === "home" ? "" : "desktop:hidden"
          } max-desktop:order-0`}
        />
        <AboutText
          className={`${
            currentMenu === "about" ? "" : "desktop:hidden"
          } max-desktop:order-4`}
        />
        <OurWorkText
          className={`${
            currentMenu === "ourwork" ? "" : "desktop:hidden"
          } max-desktop:order-2`}
        />
        <Product
          className={`${
            currentMenu === "product" ? "" : "desktop:hidden"
          } max-desktop:order-1`}
        />
        <Map
          className={`mt-4 ml-10 ${
            menuShowMap.includes(currentMenu) ? "" : "hidden"
          } max-desktop:order-3 max-desktop:m-4 max-desktop:mx-auto`}
        />
        {currentMenu !== "product" && <FloatingHubungi />}
      </main>
    </>
  );
};

export default Home;
