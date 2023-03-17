import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogoLG from "../../assets/img/logo-lg.png";
import { MenuContext } from "../../helpers/context";

const Navbar = () => {
  const { currentMenu, setCurrentMenu } = useContext(MenuContext);

  const defaultTextStyles =
    "font-jura text-white transition-all duration-150 ease-in-out hover:text-active";

  return (
    <nav className="min-w-full bg-primary-dark/90">
      <div className="mx-auto flex max-w-lg">
        <Link
          to={"/"}
          className="flex w-fit items-center justify-center bg-neutral-50/5 p-6"
          onClick={() => setCurrentMenu("home")}
        >
          <img
            src={LogoLG}
            alt="Bengkel Restu Logo"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex">
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
              <Link className={`${defaultTextStyles} text-lg`}>
                Gear Manufacturing
              </Link>
              <Link className={`${defaultTextStyles} text-lg`}>
                General Machine Process
              </Link>
              <Link className={`${defaultTextStyles} text-lg`}>Automotive</Link>
              <Link className={`${defaultTextStyles} text-lg`}>
                Construction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
