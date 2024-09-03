import Image from "next/image";
import poultryProduct from "../models/poultryProduct.json";
const ProductCardToday = () => {
  return (
    <div className="bg-white h-auto">
      <div>
        {poultryProduct.map((product, index) => (
          <div key={index} className="flex">
            <Image src={product.image} alt="poultry" width={30} height={30} />
            <div>
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
