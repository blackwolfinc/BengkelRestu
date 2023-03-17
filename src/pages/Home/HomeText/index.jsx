import React from "react";

const HomeText = () => {
  return (
    <div className="w-[500px] pr-20">
      <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        WELCOME TO OUR SITE
      </h3>
      <div className="text-sm drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <p className="mb-2 text-justify">
          Semua informasi mengenai Bengkel Teknik BudiKarya dapat anda lihat
          dalam website ini. Silahkan kontak kami 087720025188 (WA) untuk
          mendapatkan informasi lain yang anda perlukan.
        </p>
        <p className="font-semibold">Follow us</p>
        <p>Instagram : @BengkelBubutRestu</p>
      </div>
    </div>
  );
};

export default HomeText;
