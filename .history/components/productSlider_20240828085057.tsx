"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductSlider = () => {
  const images = [
    "/assets/images/poultry-image1-slider.jpg",
    "/assets/images/poultry-image2-slider.jpg",
    "/assets/images/poultry-image3-slider.jpg",
    "/assets/images/poultry-image4-slider.jpg",
    "/assets/images/poultry-image5-slider.jpg",
    "/assets/images/poultry-image6-slider.jpg",
    "/assets/images/poultry-image7-slider.jpg",
    "/assets/images/catfish-image1-slider.jpg",
  ];

  const [index, setIndex] = useState(0);

  const handleSliceNext = () => {
    setIndex((index + 1) % images.length);
  };
  const handleSlicePrev = () => {
    setIndex((index - 1) % images.length);
  };

  const handleIndicatorClick = (i: number) => {
    setIndex(i);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSliceNext();
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
        onClick={handleSlicePrev}
        className="absolute left-0 top-1/2 tranform -translate-y-1/2 bg-gray-500 text-white px-1 py-1 opacity-75 hover:opacity-100 transition-opacity"
      >
        <Image
          className=""
          src="/assets/icons/arrow-left.png"
          alt="arrow-right-icon"
          width={20}
          height={20}
        />
      </button>
      <button
        type="button"
        onClick={handleSliceNext}
        className="absolute right-0 top-1/2 tranform -translate-y-1/2 bg-gray-500 text-white px-1 py-1 opacity-75 hover:opacity-100 transition-opacity"
      >
        <Image
          className=""
          src="/assets/icons/right-arrow.png"
          alt="arrow-right-icon"
          width={20}
          height={20}
        />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`w-2 h-2 rounded-full ${
              index === i ? "bg-gray-800" : "border-black border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
