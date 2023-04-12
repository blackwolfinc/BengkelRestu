import React, { useCallback, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ImageViewer from "react-simple-image-viewer";

const DetailProduct = (props) => {
  const { className = "", title, description, productImages = [] } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [imagePreviewIndex, setImagePreviewIndex] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [productImages]);

  const handleImagePreview = useCallback((index) => {
    setImagePreviewIndex(index);
    setImagePreviewOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setImagePreviewOpen(false);
  };

  return (
    <>
      <div className={`min-w-full ${className}`}>
        <div className="flex max-w-lg max-desktop:flex-col">
          <div className="flex flex-1 flex-col bg-primary-light/80 px-10 py-14">
            <h3 className="pb-3 text-3xl font-bold text-white drop-shadow-text max-desktop:text-xl">
              {title}
            </h3>
            <p className="pb-4 text-justify text-sm font-medium leading-6 text-white">
              {description}
            </p>
            <div className="relative mt-auto aspect-video w-full overflow-hidden border-t-2 border-dashed border-white pt-2">
              <div className="flex max-h-full items-center justify-center overflow-hidden">
                <img
                  src={productImages[currentImage]}
                  alt="Product"
                  className="min-h-full min-w-full object-cover"
                />
                <div className="pointer-events-none absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-black/0 to-black/80 pt-8 pb-4">
                  <h3 className="text-xl font-semibold text-white max-md:text-sm">
                    {title}
                  </h3>
                </div>
                {/* Gallery Control */}
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center gap-2">
                  <div className="flex w-full justify-between">
                    <button
                      className="text-white/60 transition-all hover:text-white"
                      onClick={() =>
                        setCurrentImage(
                          currentImage === 0
                            ? productImages?.length - 1
                            : currentImage - 1
                        )
                      }
                    >
                      <RiArrowLeftSLine className="h-16 w-16 max-md:h-8 max-md:w-8" />
                    </button>
                    <button
                      className="text-white/60 transition-all hover:text-white"
                      onClick={() =>
                        setCurrentImage(
                          productImages?.length - 1 === currentImage
                            ? 0
                            : currentImage + 1
                        )
                      }
                    >
                      <RiArrowRightSLine className="h-16 w-16 max-md:h-8 max-md:w-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-primary-dark/80 py-14 px-10">
            <h3 className="pb-3 text-3xl font-bold text-white drop-shadow-text max-desktop:text-xl">
              Foto Produk {title}
            </h3>
            <div className="grid max-h-[500px] grid-cols-2 gap-6 overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-primary-light/40 max-md:grid-cols-1">
              {productImages.map((item, index) => {
                return (
                  <div
                    key={`product-${index}`}
                    className="flex aspect-[5/3] w-full cursor-pointer items-center justify-center overflow-hidden"
                  >
                    <img
                      src={item}
                      alt="Product 1"
                      className="min-h-full min-w-full object-cover"
                      onClick={() => {
                        handleImagePreview(index);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {imagePreviewOpen && (
        <ImageViewer
          src={productImages}
          currentIndex={imagePreviewIndex}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default DetailProduct;
