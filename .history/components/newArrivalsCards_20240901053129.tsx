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
            <div className="text-md overflow-hidden">
              <p className="line-clamp-2">{product.name}</p>
              <p className="font-semibold text-lg">
                &#8358;{product.Price} <span>per Kg</span>
              </p>
              <p>{product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsCards;
