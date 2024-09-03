import Image from "next/image";
import poultryProduct from "../models/poultryProduct.json";
const ProductCardToday = () => {
  return (
    <div className="bg-white h-auto">
      <div className="grid grid-cols-2 gap-5">
        {poultryProduct.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={100} height={100} />
            <div className="text-2xl font-semibold">
              <p>{product.name}</p>
              <p>{product.Price}</p>
              <p>{product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardToday;
