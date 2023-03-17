import React, { useEffect, useState } from "react";

const ImageBackground = (props) => {
  const {
    children,
    className = "",
    classNameList = "",
    images = [],
    times = 5000,
    fadeDuration = 500,
    disabled = false,
  } = props;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => {
        if (currentImage === images.length - 1) {
          return 0;
        } else {
          return currentImage + 1;
        }
      });
    }, times);

    return () => clearInterval(interval);
  }, [images.length, times]);

  const currentImageStyle = {
    opacity: 1,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
  };

  const nextImageStyle = {
    opacity: 0,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
  };

  return (
    <div className={`relative w-full ${className}`}>
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
