import ProductSlider from "@/components/productSlider";
const Home = () => {
  return (
    <div className="pt-20 mx-5">
      <ProductSlider />
      <div className="bgColor text w-full h-10 mt-5 text-2xl pt-1 font-semibold">
        Today &#39; s deal
      </div>
    </div>
  );
};

export default Home;
