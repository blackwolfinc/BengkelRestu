import React from "react";

const AboutText = (props) => {
  const { className = "" } = props;

  return (
    <div className={`w-fit bg-primary-light/80 p-8 text-white ${className}`}>
      <div className="w-[1000px] pr-40 max-desktop:w-full max-desktop:p-0">
        <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          ABOUT US
        </h3>
        <div className="text-sm leading-loose drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p className="mb-2 text-justify">
            Budikarya d/h NyiLie mulai beroperasi sejak tahun 1970-an. Dimulai
            dari bengkel kecil sederhana, kami terus berbenah diri untuk
            memberikan pelayanan yang lebih baik kepada para konsumen. Kontak
            kami WA : 0821-4547-3960
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
