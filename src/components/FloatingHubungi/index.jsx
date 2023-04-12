import React, { useEffect, useRef, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SOCIAL_MEDIA_LINK } from "../../constants/socialMediaLink";
import useWindowDimensions from "../../helpers/useWindowDimension";

const FloatingHubungi = () => {
  const { width } = useWindowDimensions();
  const [isAboveFooter, setIsAboveFooter] = useState(0);
  const [aboveFooterPoint, setAboveFooterPoint] = useState(0);
  const fixedRef = useRef(null);
  const bottomOffset = 40;
  const rightOffset = 16;

  useEffect(() => {
    const footer = document.getElementById("footer");

    const handleScroll = () => {
      const fixedEl = fixedRef.current;
      const footerEl = footer;

      if (fixedEl && footerEl) {
        const fixedElRect = fixedEl.getBoundingClientRect();
        const footerElRect = footerEl.getBoundingClientRect();

        setIsAboveFooter(fixedElRect.bottom > footerElRect.top);
        setAboveFooterPoint(fixedElRect.bottom - footerElRect.top);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={fixedRef} className="fixed bottom-0 h-2 w-2"></div>
      <a
        href={SOCIAL_MEDIA_LINK.WHATSAPP2}
        target="_blank"
        rel="noreferrer"
        className={`group fixed right-4 z-40 ml-auto flex w-fit cursor-pointer flex-col items-end gap-2 transition-all hover:-translate-y-1 ${
          isAboveFooter ? "-translate-y-full" : "translate-y-0"
        }}`}
        style={{
          bottom: isAboveFooter
            ? aboveFooterPoint + bottomOffset
            : bottomOffset,
          right: width > 1280 ? (width - 1280) / 2 + rightOffset : rightOffset,
        }}
      >
        <div className="w-fit rounded-full bg-[#25D366] p-2 text-white">
          <AiOutlineWhatsApp size={40} />
        </div>
        <span className="font-jura text-3xl font-bold text-white max-desktop:hidden">
          Bengkel Restu Teknik
        </span>
      </a>
    </>
  );
};

export default FloatingHubungi;
