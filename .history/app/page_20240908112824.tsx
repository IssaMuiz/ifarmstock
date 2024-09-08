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

          <BulkPurchasesCards />

          <SeasonalCards />
        </section>
      </main>
    </ClientLayout>
  );
};

export default Home;
