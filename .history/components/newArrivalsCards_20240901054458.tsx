import Image from "next/image";
import newArrivalsCards from "../models/newArrivalsCards.json";
const NewArrivalsCards = () => {
  return (
    <div className="bg-white h-auto  p-4">
      <div className="grid grid-cols-4  gap-5">
        {newArrivalsCards.map((product, index) => (
          <div
            key={index}
            className="flex shadow-md  h-auto hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col p-7 gap-3 rounded-md cursor-pointer"
          >
            <Image
              src={product.image}
              alt="poultry"
              width={150}
              height={100}
              className="h-full w-full"
            />
            <div className="text-md">
              <p className="line-clamp-2">
                <span>{product.weight}</span> of {product.name}
              </p>
              <p className="font-semibold text-lg">
                &#8358;{product.Price}
                <span className="text-md font-extralight"> per Kg</span>
              </p>
              <div>
                <Image
                  src={product.rating}
                  alt="rating-icon"
                  width={100}
                  height={60}
                />
              </div>
              <div>{product.itemsLeft} Items left</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsCards;
