import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { SOCIAL_MEDIA_LINK } from "../../constants/socialMediaLink";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="min-w-full bg-primary-dark/90 text-white max-desktop:bg-primary-dark"
    >
      <div className="mx-auto max-w-lg">
        <div className="flex w-lg">
          <div className="flex divide-x-2 divide-white/30 max-desktop:flex-col max-desktop:divide-x-0 max-desktop:py-8">
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
             
                <a href="tel:+081355763070" className="font-jura text-xs">
                 081-335-763-070
                </a>
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
          <div className="ml-auto flex flex-col justify-center gap-2 px-6 max-desktop:hidden">
            <a
              href={SOCIAL_MEDIA_LINK.FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-all ease-in-out hover:text-active"
            >
              <AiFillFacebook size={24} />
              <p className="font-jura text-xs">Bengkel Restu Teknik</p>
            </a>
            <a
              href={SOCIAL_MEDIA_LINK.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-all ease-in-out hover:text-active"
            >
              <AiOutlineInstagram size={24} />
              <p className="font-jura text-xs">Bengkel Restu Teknik</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
