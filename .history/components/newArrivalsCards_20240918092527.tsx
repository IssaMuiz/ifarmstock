import Image from "next/image";
import newArrivalsCards from "@/public/models/newArrivalsCards.json";
import PriceDisplay from "@/components/PriceDisplay";
const NewArrivalsCards = () => {
  const sliceNewArrivals = newArrivalsCards.slice(0, 10);
  return (
    <section>
      <div
        className="bg-green-600 text w-full h-auto mt-10 tablet:text-3xl mobile:text-xl p-2 items-center rounded-t-md font-semibold flex
          justify-between px-3"
      >
        <p>Featured products</p>
        <p className="text-xs cursor-pointer hover:underline">see all items</p>
      </div>
      <div className="bg-white h-auto w-auto tablet:p-4 mobile:p-1">
        <ul className="flex overflow-x-auto space-x-4 p-4 scrollbar">
          {sliceNewArrivals.map((product, index) => (
            <li
              key={index}
              className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:min-w-[200px] mobile:min-w-[160px] tablet:p-7 tablet:gap-3 mobile:p-2 mobile:gap-1 rounded-md cursor-pointer"
            >
              <Image
                src={product.image}
                alt="poultry"
                width={150}
                height={100}
                className="h-full w-full"
              />
              <div className="text-md">
                <p className="line-clamp-2 mb-3">
                  <span>{product.weight}</span> of {product.name}
                </p>
                <p className="font-semibold text-lg mb-3">
                  <PriceDisplay price={product.price} />
                  <span className="text-md font-extralight"> per kg</span>
                </p>
                <div className="mb-3">
                  <Image
                    src={product.rating}
                    alt="rating-icon"
                    width={100}
                    height={60}
                  />
                </div>
                <div className="">{product.itemsLeft} Items left</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewArrivalsCards;
