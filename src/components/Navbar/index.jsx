import React from "react";
import { Link } from "react-router-dom";
import LogoLG from "../../assets/img/logo-lg.png";

const Navbar = () => {
  const defaultTextStyles =
    "font-jura text-white transition-all duration-150 ease-in-out hover:text-active";

  return (
    <nav className="min-w-full bg-primary-dark/90">
      <div className="mx-auto flex max-w-lg">
        <div className="flex w-fit items-center justify-center bg-neutral-50/5 p-6">
          <img src={LogoLG} alt="Bengkel Restu Logo" />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-5 p-6">
            <Link
              className={`${defaultTextStyles} text-lg uppercase`}
              to={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`${defaultTextStyles} text-lg uppercase`}
              to={"/product"}
            >
              Product
            </Link>
          </div>
          <div className="my-3 w-0.5 bg-white/10"></div>
          <div className="flex flex-col justify-center gap-5 p-6">
            <Link className={`${defaultTextStyles} text-lg uppercase`}>
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
