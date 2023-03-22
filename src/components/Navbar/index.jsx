import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogoLG from "../../assets/img/logo-lg.png";
import LogoMD from "../../assets/img/logo-md.png";
import ProductData from "../../data/ProductData";
import { MenuContext } from "../../helpers/context";

const Navbar = () => {
  const {
    currentMenu,
    setCurrentMenu,
    selectedDetailProduct,
    setSelectedDetailProduct,
  } = useContext(MenuContext);

  const defaultTextStyles =
    "font-jura text-white transition-all duration-150 ease-in-out hover:text-active";

  return (
    <nav className="z-50 min-w-full bg-primary-dark/90 max-desktop:fixed max-desktop:top-0">
      <div className="mx-auto flex max-w-lg max-desktop:justify-center">
        <Link
          to={"/"}
          className="flex w-fit items-center justify-center bg-neutral-50/5 p-6 max-desktop:bg-transparent"
          onClick={() => setCurrentMenu("home")}
        >
          <img
            src={LogoLG}
            alt="Bengkel Restu Logo"
            className="w-60 cursor-pointer max-desktop:hidden"
          />
          <img
            src={LogoMD}
            alt="Bengkel Restu Logo"
            className="hidden cursor-pointer max-desktop:block"
          />
        </Link>
        <div className="flex max-desktop:hidden">
          <div className="flex flex-col gap-5 p-6">
            <Link
              className={`${defaultTextStyles} text-lg uppercase ${
                currentMenu === "about" && "!text-active"
              }`}
              to={"#about"}
              onClick={() => setCurrentMenu("about")}
            >
              About Us
            </Link>
            <Link
              className={`${defaultTextStyles} text-lg uppercase ${
                currentMenu === "product" && "!text-active"
              }`}
              to={"#product"}
              onClick={() => setCurrentMenu("product")}
            >
              Product
            </Link>
          </div>
          <div className="my-3 w-0.5 bg-white/10"></div>
          <div className="flex flex-col justify-center gap-5 p-6">
            <Link
              className={`${defaultTextStyles} text-lg uppercase ${
                currentMenu === "ourwork" && "!text-active"
              }`}
              to={"#ourwork"}
              onClick={() => setCurrentMenu("ourwork")}
            >
              Our Work
            </Link>
            <div className="flex gap-10">
              {ProductData?.map((product, index) => (
                <Link
                  key={index}
                  className={`${defaultTextStyles} text-lg ${
                    selectedDetailProduct === index &&
                    currentMenu === "detailproduct" &&
                    "!text-active"
                  }`}
                  to={`#detailproduct-${index}`}
                  onClick={() => {
                    setCurrentMenu("detailproduct");
                    setSelectedDetailProduct(index);
                  }}
                >
                  {product?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
