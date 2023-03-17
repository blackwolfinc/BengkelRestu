import React, { useContext } from "react";
import FloatingHubungi from "../../components/FloatingHubungi";
import { MenuContext } from "../../helpers/context";
import AboutText from "./AboutText";
import HomeText from "./HomeText";
import OurWorkText from "./OurWorkText";
import Product from "./Product";

const Home = () => {
  const { currentMenu } = useContext(MenuContext);

  const menuText = {
    home: <HomeText />,
    about: <AboutText />,
    ourwork: <OurWorkText />,
  };

  return (
    <main className="relative mx-auto max-w-lg">
      <div
        className={`w-fit bg-primary-light/80 p-8 text-white ${
          currentMenu === "product" && "hidden"
        }`}
      >
        {menuText[currentMenu]}
      </div>
      {currentMenu === "product" && <Product />}
      <div
        className={`mt-10 ml-8 w-fit overflow-hidden rounded-lg border-[6px] border-black/50 ${
          currentMenu === "product" && "hidden"
        }`}
      >
        <iframe
          title="Bengkel Las Dan Bubut RESTU"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505959.07274851366!2d111.7359109606761!3d-7.810429310372981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78fc70207d6643%3A0xc1887db4351a535c!2sBengkel%20Las%20Dan%20Bubut%20%22RESTU%22!5e0!3m2!1sen!2sid!4v1678968979250!5m2!1sen!2sid"
          width="340"
          height="260"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {currentMenu !== "product" && <FloatingHubungi />}
    </main>
  );
};

export default Home;
