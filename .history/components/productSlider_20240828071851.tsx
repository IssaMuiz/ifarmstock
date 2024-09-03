"use client";
import Image from "next/image";
import { useState } from "react";

const ProductSlider = () => {
  const images = [
    "/assets/images/poultry-image1-slider.jpg",
    "/assets/images/poultry-image2-slider.jpg",
    "/assets/images/poultry-image3-slider.jpg",
    "/assets/images/poultry-image4-slider.jpg",
    "/assets/images/catfish-image1-slider.jpg",
  ];

  const [index, setIndex] = useState(0);

  const handleSlice = () => {
    setIndex((index - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={i} className="min-w-full">
            <Image
              className="h-[400px] rounded-md"
              src={images}
              alt={`Slide ${i + 1}`}
              width={800}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
