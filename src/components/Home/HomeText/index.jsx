import React from "react";
import ImageBackground from "../../ImageBackground";
import LogoLG from "../../../assets/img/logo-lg.png";
import DummyImage1 from "../../../assets/img/welding-bg.png";
import DummyImage2 from "../../../assets/img/welding-bg-2.png";
import useWindowDimensions from "../../../helpers/useWindowDimension";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SOCIAL_MEDIA_LINK } from "../../../constants/socialMediaLink";

const HomeText = (props) => {
  const { className = "" } = props;
  const { width } = useWindowDimensions();

  return (
    <ImageBackground
      images={[DummyImage1, DummyImage2]}
      className={className}
      classNameList={"z-0"}
      disabled={width >= 1280}
    >
      <div className="relative z-10 max-desktop:flex max-desktop:min-h-screen max-desktop:flex-col max-desktop:bg-primary-dark/70 max-desktop:pt-[120px] max-desktop:pb-10">
        <div
          className={`w-fit bg-primary-light/80 p-8 text-white max-desktop:mx-auto`}
        >
          <div className="w-[500px] pr-20 max-desktop:w-fit max-desktop:p-0">
            <h3 className="mb-4 text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-desktop:mb-0 max-md:text-lg">
              WELCOME TO OUR SITE
            </h3>
            <div className="text-sm drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-desktop:hidden">
              <p className="mb-2 text-justify">
                Semua informasi mengenai Bengkel Restu Teknik dapat anda lihat
                dalam website ini. Silahkan kontak kami 0821-4547-3960 (WA)
                untuk mendapatkan informasi lain yang anda perlukan.
              </p>
              <p className="font-semibold">Follow us</p>
              <p>Instagram : @BengkelBubutRestu</p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto hidden w-full max-desktop:block">
          <img src={LogoLG} alt="logo" className="mx-auto w-3/4" />
        </div>
        <button className="mx-auto hidden w-fit rounded-lg border border-primary-dark bg-primary-light py-2 px-4 text-white max-desktop:block">
          <span className="font-jura text-xl">Contact Us</span>
        </button>
        <div className="mt-20 hidden items-center justify-center gap-4 max-desktop:flex">
          <a
            href={SOCIAL_MEDIA_LINK.FACEBOOK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 text-white"
          >
            <AiFillFacebook />
            <span className="font-jura text-xs">Bengkel Restu Teknik</span>
          </a>
          <a
            href={SOCIAL_MEDIA_LINK.INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 text-white"
          >
            <AiFillInstagram />
            <span className="font-jura text-xs">Bengkel Restu Teknik</span>
          </a>
        </div>
      </div>
    </ImageBackground>
  );
};

export default HomeText;
