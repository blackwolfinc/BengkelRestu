import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { MenuContext } from "../../../helpers/context";

const OurWorkText = (props) => {
  const { setCurrentMenu } = useContext(MenuContext);
  const { className = "" } = props;

  return (
    <div className={`w-fit bg-primary-light/80 p-8 text-white ${className}`}>
      <div className="relative w-[1000px] pr-40 max-desktop:w-full max-desktop:p-0">
        <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          OUR WORK
        </h3>
        <div className="text-sm leading-loose drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p className="mb-2 text-justify">
            Saat ini Bengkel Restu Teknik menawarkan jasa dan produk dalam
            bidang teknik. Dalam bidang jasa kami beroperasi dalam 4 divisi,
            antara lain , General Machining Process, pembuatan pompa sedot
            pasir, roll plat , dan Fabrication. Dengan fokus utama ada pada Jasa
            Machining/Pemesinan. Selain bidang jasa kami juga menjual
            produk-produk jadi seperti pompa sedot pasir berbagai ukuran,, dan
            mesin coper. Untuk lebih jelas silahkan lihat portofolio kami dalam
            website ini atau kontak kami secara langsung.
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

export default OurWorkText;
