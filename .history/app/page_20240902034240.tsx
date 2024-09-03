"use client";

import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";
import NewArrivalsCards from "@/components/newArrivalsCards";
import BulkPurchasesCards from "@/components/bulkPurchasesCards";
import SeasonalCards from "@/components/seasonalCards";
import Footer from "@/components/footer";

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
          <BulkPurchasesCards />
          <div className="bgColor text w-full h-auto mt-10 text-3xl p-2 rounded-t-md font-semibold">
            Seasonal offers
          </div>
          <SeasonalCards />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </ClientLayout>
  );
};

export default Home;
