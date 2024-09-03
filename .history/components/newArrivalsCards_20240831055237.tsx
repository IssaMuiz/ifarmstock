import Image from "next/image";
import poultryProduct from "../models/newArrivalsCards.json";
const NewArrivalsCards = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-cols-4 gap-5">
        {poultryProduct.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={150} height={150} />
            <div className="text-md">
              <p content="" className="text-gray-600">
                {product.name}
              </p>
              <p className="font-semibold">N{product.Price}</p>
              <p>{product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsCards;
