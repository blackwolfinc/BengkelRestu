import React, { useState } from "react";
import DummyImage from "../../../assets/img/bubut.png";

const ProductData = [
  {
    image: DummyImage,
    title: "Bubut Professional",
    description:
      "Proses Bubut Yang di lakukan oleh tenaga Ahli di bidangnya dengan setandar multinasional di lakukan secara detail dan perlahan 1",
  },
  {
    image: DummyImage,
    title: "Las Professional",
    description:
      "Proses Bubut Yang di lakukan oleh tenaga Ahli di bidangnya dengan setandar multinasional di lakukan secara detail dan perlahan 2",
  },
  {
    image: DummyImage,
    title: "Bubut Professional",
    description:
      "Proses Bubut Yang di lakukan oleh tenaga Ahli di bidangnya dengan setandar multinasional di lakukan secara detail dan perlahan 3",
  },
  {
    image: DummyImage,
    title: "Las Professional",
    description:
      "Proses Bubut Yang di lakukan oleh tenaga Ahli di bidangnya dengan setandar multinasional di lakukan secara detail dan perlahan 4",
  },
  {
    image: DummyImage,
    title: "Bubut Professional",
    description:
      "Proses Bubut Yang di lakukan oleh tenaga Ahli di bidangnya dengan setandar multinasional di lakukan secara detail dan perlahan 5",
  },
];

const Product = (props) => {
  const { className = "" } = props;
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <div className={`min-w-full ${className}`}>
      <div className="flex max-w-lg max-desktop:flex-col">
        <div className="flex-1 divide-y-4 divide-white/20 bg-primary-light/80 px-10 py-14">
          <h3 className="pb-3 text-3xl font-bold text-white drop-shadow-text max-desktop:text-xl">
            Produk-Produk Restu Teknik
          </h3>
          <div className="grid max-h-[500px] grid-cols-2 gap-6 overflow-y-scroll pr-4 pt-7 scrollbar-thin scrollbar-thumb-primary-dark/40">
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
        <div className="flex-1 bg-primary-dark/80 py-14 px-10">
          <div className="mb-4 aspect-video w-full">
            <img
              src={ProductData[selectedProduct]?.image}
              alt="Product"
              className="min-h-full min-w-full"
            />
          </div>
          <h3 className="mb-3 text-3xl font-bold text-white drop-shadow-text">
            {ProductData[selectedProduct]?.title}
          </h3>
          <p className="text-justify text-sm font-medium leading-6 text-white">
            {ProductData[selectedProduct]?.description}
          </p>
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
      <div className="mb-2 aspect-video w-full">
        <img src={image} alt="Product 1" className="min-h-full min-w-full" />
      </div>
      <h6 className="text-lg font-bold text-white">{title}</h6>
    </div>
  );
};

export default Product;
