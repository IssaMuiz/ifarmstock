import Image from "next/image";
import seasonalCards from "@/models/seasonalCards.json";
const SeasonalCards = () => {
  return (
    <div className="bg-white h-auto  p-4">
      <div className="grid grid-cols-4  gap-5">
        {seasonalCards.map((product, index) => (
          <div
            key={index}
            className="flex shadow-lg flex-col p-4 gap-3 rounded-md"
          >
            <Image
              src={product.image}
              alt="poultry"
              width={150}
              height={100}
              className="h-full w-full"
            />
            <div className="text-lg overflow-hidden">
              <p className="text-gray-600 line-clamp-2">{product.name}</p>
              <p className="font-semibold text-lg">&#8358;{product.Price}</p>
              <p>{product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalCards;
