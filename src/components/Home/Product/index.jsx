import React, { useContext, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import ProductData from "../../../data/ProductData";
import { MenuContext } from "../../../helpers/context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { setCurrentMenu, setSelectedDetailProduct } = useContext(MenuContext);
  const { className = "" } = props;
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <div className={`min-w-full ${className}`}>
      <div className="flex max-w-lg max-desktop:flex-col">
        <div className="flex-1 divide-y-4 divide-white/20 bg-primary-light/80 px-10 py-14">
          <h3 className="pb-3 text-2xl font-bold text-white drop-shadow-text max-desktop:text-xl">
            Produk dan Jasa Bengkel Restu Teknik
          </h3>
          <div className="grid max-h-[500px] grid-cols-2 gap-6 overflow-y-scroll pr-4 pt-7 scrollbar-thin scrollbar-thumb-primary-dark/40 max-md:grid-cols-1">
            {ProductData.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  {...item}
                  active={selectedProduct === index}
                  onClick={() => setSelectedProduct(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-primary-dark/80 py-14 px-10">
          <div className="mb-4 aspect-video w-full overflow-hidden">
            <img
              src={ProductData[selectedProduct]?.image}
              alt="Product"
              className="min-h-full min-w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h3 className="mb-3 text-3xl font-bold text-white drop-shadow-text">
              {ProductData[selectedProduct]?.title}
            </h3>
            <p className="text-justify text-sm font-medium leading-6 text-white">
              {ProductData[selectedProduct]?.description}
            </p>
            <div className="mt-auto">
              <button
                className="mt-8 flex w-fit items-center gap-2 border-b-2 border-b-transparent font-bold text-white transition-all hover:border-b-white max-desktop:hidden"
                onClick={() => {
                  setCurrentMenu("detailproduct");
                  setSelectedDetailProduct(selectedProduct);
                }}
              >
                <span>Lihat Detail </span>
                <IoMdArrowRoundForward />
              </button>
              <Link
                to={`/product/${selectedProduct}`}
                className="mt-8 hidden w-fit items-center gap-2 border-b-2 border-b-transparent font-bold text-white transition-all hover:border-b-white max-desktop:flex"
              >
                <span>Lihat Detail </span>
                <IoMdArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItem = (props) => {
  const { image, title, onClick, active = false } = props;

  return (
    <div
      className={`cursor-pointer rounded-lg p-4 transition-all ease-in-out hover:bg-primary-dark ${
        active ? "bg-primary-dark" : "bg-primary-dark/60"
      }`}
      onClick={onClick}
    >
      <div className="mb-2 aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt="Product 1"
          className="min-h-full min-w-full object-cover"
        />
      </div>
      <h6 className="text-lg font-bold text-white">{title}</h6>
    </div>
  );
};

export default Product;
