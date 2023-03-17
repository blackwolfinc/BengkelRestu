import React from "react";

const OurWorkText = (props) => {
  const { className = "" } = props;

  return (
    <div className={`w-fit bg-primary-light/80 p-8 text-white ${className}`}>
      <div className="w-[1000px] pr-40">
        <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          OUR WORK
        </h3>
        <div className="text-sm drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p className="mb-2 text-justify">
            Saat ini Budikarya menawarkan jasa dan produk dalam bidang teknik.
            Dalam bidang jasa kami beroperasi dalam 5 divisi, antara lain Gear
            Manufacturing, General Machining Process, Automotive, Construction,
            dan Fabrication. Dengan fokus utama ada pada Jasa
            Machining/Pemesinan. Selain bidang jasa kami juga menjual
            produk-produk jadi dalam untuk indusri karet, dan stone crusher.
            Untuk lebih jelas silahkan lihat portofolio kami dalam website ini
            atau kontak kami secara langsung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkText;
