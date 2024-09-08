"use client";

import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";
import NewArrivalsCards from "@/components/newArrivalsCards";
import BulkPurchasesCards from "@/components/bulkPurchasesCards";
import SeasonalCards from "@/components/seasonalCards";

const Home = () => {
  return (
    <ClientLayout>
      <main className="pt-20 tablet:mx-5 mobile:mx-2 h-auto">
        <section>
          <ProductSlider />

          <NewArrivalsCards />
          <div
            className="bgColor text w-full h-auto mt-10 tablet:text-3xl mobile:text-xl p-2 rounded-t-md font-semibold flex
          justify-between px-3 items-center"
          >
            <p>Bulk purchases</p>
            <p className="text-xs cursor-pointer hover:underline">
              see all items
            </p>
          </div>
          <BulkPurchasesCards />
          <div
            className="bgColor text w-full h-auto mt-10 tablet:text-3xl mobile:text-xl p-2 rounded-t-md font-semibold flex
          justify-between px-3 items-center"
          >
            <p>Seasonal offers</p>
            <p className="text-xs cursor-pointer hover:underline">
              see all items
            </p>
          </div>
          <SeasonalCards />
        </section>
      </main>
    </ClientLayout>
  );
};

export default Home;
