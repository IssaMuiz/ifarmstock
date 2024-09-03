import Image from "next/image";
import bulkPurchasesCards from "@/models/bulkPurchasesCards.json";
const BulkPurchasesCard = () => {
  return (
    <div className="bg-white h-auto p-4">
      <div className="grid grid-cols-4 gap-5">
        {bulkPurchasesCards.map((product, index) => (
          <div key={index} className="flex gap-3">
            <Image src={product.image} alt="poultry" width={150} height={150} />
            <div className="text-md">
              <p content="" className="text-gray-600">
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

export default BulkPurchasesCard;
