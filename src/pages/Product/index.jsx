import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import DetailProduct from "../../components/Home/DetailProduct";
import ProductData from "../../data/ProductData";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ProductData[id]) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="relative mx-auto max-w-lg py-10 max-desktop:flex max-desktop:flex-col max-desktop:bg-primary-dark-2 max-desktop:py-0 max-desktop:pb-10 desktop:animate-[initialLoad_2s_ease-in-out_forwards]">
      <DetailProduct className={`max-desktop:pt-20`} {...ProductData[id]} />
    </div>
  );
};

export default Product;
