import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import MainLayout from "../../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <main className="relative mx-auto max-w-lg">
        <div className="mt-10 w-[500px] bg-primary-light/80 p-8 text-white">
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
        <div className="mt-10 ml-8 w-fit overflow-hidden rounded-lg border-[6px] border-black/50">
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
        <div className="absolute bottom-0 right-0 flex cursor-pointer flex-col items-end gap-2">
          <div className="w-fit rounded-full bg-[#25D366] p-2 text-white">
            <AiOutlineWhatsApp size={40} />
          </div>
          <span className="font-jura text-3xl font-bold text-white">
            Las Professional
          </span>
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
