import Image from "next/image";
import newArrivalsCards from "../models/newArrivalsCards.json";
const NewArrivalsCards = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-cols-4 gap-5">
        {newArrivalsCards.map((product, index) => (
          <div key={index} className="flex flex-col gap-3 h-full w-full">
            <Image src={product.image} alt="poultry" width={200} height={150} />
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

export default NewArrivalsCards;
