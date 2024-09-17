"use client";
import ProductSlider from "@/components/productSlider";
import ClientLayout from "@/components/clientLayout";
import NewArrivalsCards from "@/components/newArrivalsCards";
import BulkPurchasesCards from "@/components/bulkPurchasesCards";
import SeasonalCards from "@/components/seasonalCards";
import { Provider } from "react-redux";
import { store } from "@/components/redux/store";
import { wrapper } from "@/components/redux/storeIndex";

const Home = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Home;
