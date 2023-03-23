import React, { useContext } from "react";
import FloatingHubungi from "../../components/FloatingHubungi";
import { MenuContext } from "../../helpers/context";
import AboutText from "../../components/Home/AboutText";
import HomeText from "../../components/Home/HomeText";
import OurWorkText from "../../components/Home/OurWorkText";
import Product from "../../components/Home/Product";
import Map from "../../components/Home/Map";
import DetailProduct from "../../components/Home/DetailProduct";
import ProductData from "../../data/ProductData";

const Home = () => {
  const { currentMenu, selectedDetailProduct } = useContext(MenuContext);
  const menuShowMap = ["home", "about", "ourwork"];
  const menuShowFloatingHubungi = ["home", "about", "ourwork"];

  return (
    <>
      <main className="relative mx-auto my-10 max-w-lg max-desktop:my-0 max-desktop:flex max-desktop:flex-col max-desktop:bg-primary-dark-2 desktop:animate-[initialLoad_2s_ease-in-out_forwards]">
        <HomeText
          className={`${
            currentMenu === "home"
              ? "desktop:animate-[menuIn_1s_ease-in-out_forwards]"
              : "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]"
          } max-desktop:order-0`}
        />
        <AboutText
          className={`${
            currentMenu === "about"
              ? "desktop:animate-[menuIn_1s_ease-in-out_forwards]"
              : "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]"
          } max-desktop:order-4`}
        />
        <OurWorkText
          className={`${
            currentMenu === "ourwork"
              ? "desktop:animate-[menuIn_1s_ease-in-out_forwards]"
              : "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]"
          } max-desktop:order-2`}
        />
        <Product
          className={`${
            currentMenu === "product"
              ? "desktop:animate-[menuIn_1s_ease-in-out_forwards]"
              : "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]"
          } max-desktop:order-1`}
        />
        <DetailProduct
          className={`max-desktop:hidden max-desktop:pt-20 ${
            currentMenu === "detailproduct"
              ? "desktop:animate-[menuIn_1s_ease-in-out_forwards]"
              : "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]"
          }`}
          {...ProductData[selectedDetailProduct]}
        />
        <Map
          className={`mt-4 ${
            menuShowMap.includes(currentMenu) ? "" : "desktop:hidden"
          } max-desktop:order-3 max-desktop:m-4 max-desktop:mx-auto`}
        />
        {menuShowFloatingHubungi.includes(currentMenu) && <FloatingHubungi />}
      </main>
    </>
  );
};

export default Home;
