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
  return (
    <div>
      <Image
        className="h-[400px] rounded-md"
        src="/assets/images/poultry-image1-slider.jpg"
        alt="search-icon"
        width={800}
        height={200}
      />
    </div>
  );
};

export default ProductSlider;
