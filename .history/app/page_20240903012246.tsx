"use client";

import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";
import NewArrivalsCards from "@/components/newArrivalsCards";
import BulkPurchasesCards from "@/components/bulkPurchasesCards";
import SeasonalCards from "@/components/seasonalCards";

const Home = () => {
  return (
    <ClientLayout>
      <div className="pt-20 mx-5">
        <div>
          <ProductSlider />

          <div
            className="bgColor text w-full h-auto mt-10 text-3xl p-2 items-center rounded-t-md font-semibold flex
          justify-between"
          >
            <p>New Arrivals</p>
            <p className="text-xs cursor-pointer hover:underline">
              see all items
            </p>
          </div>
          <NewArrivalsCards />
          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            Bulk purchases
          </div>
          <BulkPurchasesCards />
          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            Seasonal offers
          </div>
          <SeasonalCards />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Home;
