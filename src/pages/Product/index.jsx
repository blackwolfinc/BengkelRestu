import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import DetailProduct from "../../components/Home/DetailProduct";
import ProductData from "../../data/ProductData";
import { SOCIAL_MEDIA_LINK } from "../../constants/socialMediaLink";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ProductData[id]) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative mx-auto max-w-lg py-10 max-desktop:flex max-desktop:flex-col max-desktop:bg-primary-dark max-desktop:py-0 max-desktop:pb-10 desktop:animate-[initialLoad_2s_ease-in-out_forwards]">
      <DetailProduct className={`max-desktop:pt-20`} {...ProductData[id]} />
      <div className="hidden flex-col items-center gap-3 py-10 max-desktop:flex">
        <a
          href={SOCIAL_MEDIA_LINK.WHATSAPP2}
          target="_blank"
          rel="noreferrer"
          className="mx-auto w-fit rounded-lg border border-primary-dark bg-primary-light py-2 px-4 text-white"
        >
          <span className="font-jura text-xl">Contact Us</span>
        </a>
        <Link to={"/"} className="text-white underline underline-offset-2">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Product;
