import Image from "next/image";
import poultryProduct from "../models/poultryProduct.json";
const NewArrivalsCards = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-cols-2 gap-5">
        {poultryProduct.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={200} height={200} />
            <div className="text-2xl font-semibold">
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

export default NewArrivalsCards;
