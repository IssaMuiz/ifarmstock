"use client";
import ProductCardToday from "@/components/productcardToday";
import ProductSlider from "@/components/productSlider";
import Sidenav from "@/components/sidenav";
interface isOpenType {
  isOpen: boolean;
}
const Home = ({ isOpen }: isOpenType) => {
  return (
    <div className="pt-20 mx-5">
      <div className={`${isOpen ? "filter blur-md" : ""}`}>
        <ProductSlider />

        <div className="bgColor text w-full h-auto mt-5 text-3xl p-2 rounded-t-md font-semibold">
          Today&#39;s Deals
        </div>
        <ProductCardToday />
      </div>
      <Sidenav isOpen={isOpen} />
    </div>
  );
};

export default Home;
