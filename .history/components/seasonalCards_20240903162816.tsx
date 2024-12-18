import Image from "next/image";
import seasonalCards from "@/models/seasonalCards.json";
const SeasonalCards = () => {
  return (
    <div className="bg-white h-auto w-auto tablet:p-4 mobile:p-1">
      <div className="flex overflow-x-auto space-x-4 p-4">
        {seasonalCards.map((product, index) => (
          <div
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
                &#8358;{product.Price}
                <span className="text-md font-extralight"> per Kg</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalCards;
