import Image from "next/image";
import newArrivalsCards from "../models/newArrivalsCards.json";
const NewArrivalsCards = () => {
  const sliceNewArrivals = newArrivalsCards.slice(0, 15);
  return (
    <div className="bg-white h-auto w-full tablet:p-4 mobile:p-1">
      <div
        /* className="grid tablet:grid-rows-2 desktop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 w-auto tablet:gap-5 mobile:gap-2" */ className="flex overflow-x-auto space-x-4 p-4"
      >
        {sliceNewArrivals.map((product, index) => (
          <div
            key={index}
            className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:w-[500px] tablet:p-7 tablet:gap-3 mobile:p-2 mobile:gap-1 rounded-md cursor-pointer"
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
                &#8358;{product.Price}
                <span className="text-md font-extralight"> per Kg</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsCards;
