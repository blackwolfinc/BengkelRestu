import React from "react";

const ImageBackground = (props) => {
  const { children, className = "", images = [], times = 3 } = props;

  return (
    <div className={`relative w-full ${className}`}>
      <ul className="absolute -z-10 h-full w-full">
        {images.map((image, index) => (
          <li
            key={index}
            className="absolute h-full w-full"
            style={{ background: `url(${image})` }}
          ></li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default ImageBackground;
