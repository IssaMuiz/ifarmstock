import Image from "next/image";

const ProductSlider = () => {
  return (
    <div>
      <Image
        className="h-[400px]"
        src="/assets/images/poultry-image1-slider.jpg"
        alt="search-icon"
        width={900}
        height={200}
      />
    </div>
  );
};

export default ProductSlider;
