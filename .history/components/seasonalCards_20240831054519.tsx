import Image from "next/image";
import seasonalCards from "@/models/seasonalCards.json";
const SeasonalCards = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-rows-4 gap-5">
        {seasonalCards.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={200} height={200} />
            <div className="text-xl font-semibold">
              <p className="text-gray-600">{product.name}</p>
              <p>N{product.Price}</p>
              <p>{product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalCards;
