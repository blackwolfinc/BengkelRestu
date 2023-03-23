import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { MenuContext } from "../../../helpers/context";

const AboutText = (props) => {
  const { setCurrentMenu } = useContext(MenuContext);
  const { className = "" } = props;

  return (
    <div className={`w-fit bg-primary-light/80 p-8 text-white ${className}`}>
      <div className="relative w-[1000px] pr-40 max-desktop:w-full max-desktop:p-0">
        <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          ABOUT US
        </h3>
        <div className="text-sm leading-loose drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p className="mb-2 text-justify">
            Bengkel restu teknik mulai beroperasi sejak tahun 2000-an. Dimulai
            dari bengkel kecil sederhana, kami terus berbenah diri untuk
            memberikan pelayanan yang lebih baik kepada para konsumen. Kontak
            kami WA : 0821-4547-3960
          </p>
        </div>
        <button
          className="absolute top-0 right-0 transition-all hover:text-primary-dark max-desktop:hidden"
          onClick={() => setCurrentMenu("home")}
        >
          <IoClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default AboutText;
