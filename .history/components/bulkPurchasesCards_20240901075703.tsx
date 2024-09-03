import Image from "next/image";
import bulkPurchasesCards from "@/models/bulkPurchasesCards.json";
const BulkPurchasesCard = () => {
  const sliceBulkPurchase = bulkPurchasesCards.slice(0, 8);
  return (
    <div className="bg-white h-auto  p-4">
      <div className="grid grid-cols-4  gap-5">
        {sliceBulkPurchase.map((product, index) => (
          <div
            key={index}
            className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col p-7 gap-3 rounded-md cursor-pointer"
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
              <p className="font-semibold text-lg mb-1">
                &#8358;{product.Price}
                <span className="text-md font-extralight"> per Kg</span>
              </p>
              <p className="mb-2 line-through">&#8358;{product.discount}</p>
              <p>{product.minimum} minimum purchase</p>
              <p>{product.itemsLeft} items Left</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulkPurchasesCard;
