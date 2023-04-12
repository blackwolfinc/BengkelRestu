import React from "react";
import useWindowDimensions from "../../../helpers/useWindowDimension";
import DepanBengkel from "../../../assets/img/depanBengkel.jpeg";

const Map = (props) => {
  const { width } = useWindowDimensions();
  const { className = "" } = props;
  const mobileMargin = 16;

  return (
    <div
      className={`w-fit overflow-hidden rounded-lg border-[6px] border-black/50 ${className}`}
    >
      <a
        href="https://goo.gl/maps/ComnFQ9gto93tzVH9"
        className="absolute z-30 h-[18rem] w-[100%]"
      >
        {" "}
      </a>
      <img
        className="absolute top-0 z-40 mt-[-5rem] hidden w-[100%] opacity-80 sm:flex sm:hover:hidden"
        src={DepanBengkel}
        alt="Depan Bengkel"
      ></img>
      <iframe
        title="Bengkel Las Dan Bubut RESTU"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505959.07274851366!2d111.7359109606761!3d-7.810429310372981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78fc70207d6643%3A0xc1887db4351a535c!2sBengkel%20Las%20Dan%20Bubut%20%22RESTU%22!5e0!3m2!1sen!2sid!4v1678968979250!5m2!1sen!2sid"
        width={width < 1280 ? width - mobileMargin * 2 : 340}
        height={width < 1280 ? width - mobileMargin * 2 : 260}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
