import Image from "next/image";
import bulkPurchasesCards from "@/models/bulkPurchasesCards.json";
const BulkPurchasesCard = () => {
  const sliceBulkPurchase = bulkPurchasesCards.slice(0, 8);
  return (
    <div className="bg-white h-auto w-auto tablet:p-2 mobile:p-1">
      <ul className="flex overflow-x-auto space-x-2 p-2">
        {sliceBulkPurchase.map((product, index) => (
          <li
            key={index}
            className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:min-w-[250px] mobile:min-w-[160px] tablet:p-7 tablet:gap-3 mobile:p-2 mobile:gap-1 scrollbar rounded-md cursor-pointer"
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
                <span className="text-md font-extralight"> per kg</span>
              </p>
              <p className="mb-2 line-through text-gray-500">
                &#8358;{product.discount}
              </p>
              <p className="text-green-600 font-semibold mb-1">
                You save &#8358;{product.discount - product.Price} per kg
              </p>
              <p className="mb-2">{product.minimum}pcs minimum purchase</p>
              <p>{product.itemsLeft} pcs Left</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulkPurchasesCard;
