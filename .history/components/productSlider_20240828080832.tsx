"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductSlider = () => {
  const images = [
    "/assets/images/poultry-image1-slider.jpg",
    "/assets/images/poultry-image2-slider.jpg",
    "/assets/images/poultry-image3-slider.jpg",
    "/assets/images/poultry-image4-slider.jpg",
    "/assets/images/catfish-image1-slider.jpg",
  ];

  const [index, setIndex] = useState(0);

  const sliceNext = () => {
    setIndex((index + 1) % images.length);
  };
  const slicePrev = () => {
    setIndex((index - 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliceNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index]);
  return (
    <div className="relative w-[800px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={i} className="min-w-full">
            <Image
              className="h-[400px] rounded-md"
              src={image}
              alt={`Slide ${i + 1}`}
              width={800}
              height={200}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={slicePrev}
        className="absolute left-0 top-1/2 tranform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 opacity-75 hover:opacity-100 transition-opacity"
      >
        <Image
          className=""
          src="/assets/icons/arrow-left.png"
          alt="arrow-right-icon"
          width={30}
          height={30}
        />
      </button>
      <button
        type="button"
        onClick={sliceNext}
        className="absolute right-0 top-1/2 tranform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 opacity-75 hover:opacity-100 transition-opacity"
      >
        <Image
          className=""
          src="/assets/icons/right-arrow.png"
          alt="arrow-right-icon"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default ProductSlider;
