"use client";
import ProductCardToday from "@/components/productcardToday";
import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";

const Home = () => {
  return (
    <ClientLayout>
      <div className="pt-20 mx-5">
        <div>
          <ProductSlider />

          <div className="bgColor text w-full h-auto mt-5 text-3xl p-2 rounded-t-md font-semibold">
            Fresh harvest
          </div>
          <ProductCardToday />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Home;
