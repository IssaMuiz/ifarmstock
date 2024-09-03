import ProductCardToday from "@/components/productcardToday";
import ProductSlider from "@/components/productSlider";
const Home = () => {
  return (
    <div className="pt-20 mx-5">
      <ProductSlider />
      <div className="bgColor text w-full h-auto mt-5 text-3xl p-2 rounded-t-md font-semibold">
        Today &#39; s deal
      </div>
      <ProductCardToday />
    </div>
  );
};

export default Home;
