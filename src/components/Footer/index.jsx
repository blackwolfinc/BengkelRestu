import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 min-w-full bg-primary-dark/90 text-white">
      <div className="mx-auto max-w-lg">
        <div className="flex w-lg">
          <div className="flex divide-x-2 divide-white/30">
            <div className="flex flex-col gap-1 p-6">
              <h6>ADDRESS</h6>
              <div className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt />
                <p className="font-jura text-xs">
                  Jln. Raya Kepuhrejo Ngantru Tulungagung
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-6">
              <h6>PHONE</h6>
              <div className="flex items-center gap-2 text-sm">
                <AiOutlineWhatsApp />
                <p className="font-jura text-xs">
                  0857-8425-8128, 0821-4547-3960
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-6">
              <h6>EMAIL</h6>
              <div className="flex items-center gap-2 text-sm">
                <HiOutlineMail />
                <p className="font-jura text-xs">
                  bengkelbubutrestujayateknik@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col justify-center gap-2 px-6">
            <div className="flex items-center gap-3">
              <AiFillFacebook size={24} />
              <p className="font-jura text-xs">Bengkel Restu Teknik</p>
            </div>
            <div className="flex items-center gap-3">
              <AiOutlineInstagram size={24} />
              <p className="font-jura text-xs">Bengkel Restu Teknik</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
