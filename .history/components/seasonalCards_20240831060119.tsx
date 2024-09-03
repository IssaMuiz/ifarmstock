import Image from "next/image";
import seasonalCards from "@/models/seasonalCards.json";
const SeasonalCards = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-cols-4 gap-5">
        {seasonalCards.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={150} height={150} />
            <div className="text-md">
              <p content="" className="text-gray-600 leading-10">
                {product.name}
              </p>
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
