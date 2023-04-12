import React, { useContext, useEffect, useState } from "react";
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
  const [prevMenu, setPrevMenu] = useState(currentMenu);
  const [currentMenuIn, setCurrentMenuIn] = useState("");
  const [currentMenuOut, setCurrentMenuOut] = useState("");
  const menuShowMap = ["home", "about", "ourwork"];
  const menuShowFloatingHubungi = ["home", "about", "ourwork"];

  useEffect(() => {
    setPrevMenu(currentMenu);
    setCurrentMenuOut(prevMenu);
    setCurrentMenuIn(currentMenu);

    setTimeout(() => {
      setCurrentMenuOut("");
      setCurrentMenuIn("");
    }, 1000);
  }, [currentMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkMenuClass = (menu) => {
    if (currentMenuIn === menu) {
      return "desktop:animate-[menuIn_1s_ease-in-out_forwards]";
    }

    if (currentMenuOut === menu) {
      return "desktop:!absolute desktop:top-0 desktop:animate-[menuOut_1s_ease-in-out_forwards]";
    }

    if (currentMenu !== menu) {
      return "desktop:hidden";
    }

    return "";
  };

  return (
    <>
      <div className="relative mx-auto max-w-lg py-10 max-desktop:flex max-desktop:flex-col max-desktop:bg-primary-dark-2 max-desktop:py-0 desktop:animate-[initialLoad_2s_ease-in-out_forwards]">
        <HomeText className={`${checkMenuClass("home")} max-desktop:order-0`} />
        <AboutText
          className={`${checkMenuClass("about")} max-desktop:order-4`}
        />
        <OurWorkText
          className={`${checkMenuClass("ourwork")} max-desktop:order-2`}
        />
        <Product
          className={`${checkMenuClass("product")} max-desktop:order-1`}
        />
        <DetailProduct
          className={`max-desktop:hidden max-desktop:pt-20 ${checkMenuClass(
            "detailproduct"
          )}`}
          {...ProductData[selectedDetailProduct]}
        />
        <Map
          className={`mt-4 ${
            menuShowMap.includes(currentMenu) ? "" : "desktop:hidden"
          } relative max-desktop:order-3 max-desktop:m-4 max-desktop:mx-auto`}
        />

        {menuShowFloatingHubungi.includes(currentMenu) && <FloatingHubungi />}
      </div>
    </>
  );
};

export default Home;
