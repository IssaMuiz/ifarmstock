"use client";

import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";
import NewArrivalsCards from "@/components/newArrivalsCards";

const Home = () => {
  return (
    <ClientLayout>
      <div className="pt-20 mx-5">
        <div>
          <ProductSlider />

          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            New Arrivals
          </div>
          <NewArrivalsCards />
          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            Bulk purchases
          </div>
          <NewArrivalsCards />
          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            Seasonal offers
          </div>
          <NewArrivalsCards />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Home;
