import React, { useEffect, useState } from "react";
import ArrowRight from "../../assets/svg/ArrowRight";
import useWindowDimensions from "../../helpers/useWindowDimension";

const ImageBackground = (props) => {
  const {
    children,
    className = "",
    classNameList = "",
    images = [],
    times = 5000,
    control = false,
    fadeDuration = 500,
    disabled = false,
  } = props;
  const { width } = useWindowDimensions();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, times);

    return () => clearInterval(interval);
  }, [images.length, times]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentImageStyle = {
    opacity: 1,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
  };

  const nextImageStyle = {
    opacity: 0,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
  };

  const handleNextImage = () => {
    setCurrentImage((currentImage) => {
      if (currentImage === images.length - 1) {
        return 0;
      } else {
        return currentImage + 1;
      }
    });
  };

  return (
    <div className={`relative w-full ${className}`}>
      {!disabled && control && (
        <button
          className="group absolute top-1/2 z-10"
          style={{ right: width > 1280 ? (width - 1280) / 2 + 36 : 36 }}
          onClick={handleNextImage}
        >
          <ArrowRight className="fill-white/60 transition-all group-hover:fill-white" />
        </button>
      )}
      <ul
        className={`absolute top-0 -z-10 h-full w-full ${
          disabled ? "hidden" : ""
        } ${classNameList}`}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="absolute h-full w-full bg-cover"
            style={{
              backgroundImage: `url(${image})`,
              ...(index === currentImage ? currentImageStyle : nextImageStyle),
            }}
          ></li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default ImageBackground;
