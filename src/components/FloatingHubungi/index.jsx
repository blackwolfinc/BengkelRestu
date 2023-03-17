import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const FloatingHubungi = () => {
  return (
    <div className="group absolute bottom-0 right-4 flex cursor-pointer flex-col items-end gap-2 transition-all hover:-translate-y-1">
      <div className="w-fit rounded-full bg-[#25D366] p-2 text-white">
        <AiOutlineWhatsApp size={40} />
      </div>
      <span className="font-jura text-3xl font-bold text-white">
        Las Professional
      </span>
    </div>
  );
};

export default FloatingHubungi;
