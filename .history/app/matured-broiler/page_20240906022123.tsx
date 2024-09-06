import Image from "next/image";
import broiler from "@/models/broiler.json";

const maturedBroiler = () => {
  return (
    <section className="flex gap-5 mx-7 mt-20 ">
      <div className="bg-white p-3 w-80 rounded-md">
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3">
          <h1 className="text-xl font-semibold">Brand</h1>
          <div className="flex items-center gap-1">
            <input id="Local-farmer" type="radio" name="brand" value="1" />
            <label className="text-base ml-2" htmlFor="Local-farmer">
              Local farmer
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Agrited" type="radio" name="brand" value="2" />
            <label className="text-base ml-2" htmlFor="Agrited">
              Agrited
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Chi" type="radio" name="brand" value="3" />
            <label className="text-base ml-2" htmlFor="Chi">
              Chi
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Zartech" type="radio" name="brand" value="4" />
            <label className="text-base ml-2" htmlFor="Zartech">
              Zartech
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Afrimash" type="radio" name="brand" value="5" />
            <label className="text-base ml-2" htmlFor="Afrimash">
              Afrimash
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 ">
          <h1 className="text-xl font-semibold">Product Rating</h1>
          <div className="flex items-center gap-1">
            <input id="rating-5" type="radio" name="rating" value="5" />
            <label className="text-base ml-2" htmlFor="rating-5">
              <Image
                src="/assets/icons/rating-50.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-4" type="radio" name="rating" value="4" />
            <label className="text-base ml-2" htmlFor="rating-4">
              <Image
                src="/assets/icons/rating-40.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-3" type="radio" name="rating" value="3" />
            <label className="text-base ml-2" htmlFor="rating-3">
              <Image
                src="/assets/icons/rating-40.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-2" type="radio" name="rating" value="4" />
            <label className="text-base ml-2" htmlFor="rating-2">
              <Image
                src="/assets/icons/rating-20.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-1" type="radio" name="rating" value="1" />
            <label className="text-base ml-2" htmlFor="rating-1">
              <Image
                src="/assets/icons/rating-10.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="Broiler-cards h-auto bg-white p-3 w-full rounded-md ">
        <div className="bg-white h-auto w-auto tablet:p-4 mobile:p-1">
          <div className="grid grid-cols-3 p-4">
            {broiler.map((product, index) => (
              <div
                key={index}
                className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:min-w-[200px] mobile:min-w-[160px] tablet:p-7 tablet:gap-3 mobile:p-2 mobile:gap-1 rounded-md cursor-pointer"
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
                  <p className="font-semibold text-lg mb-3">
                    &#8358;{product.Price}
                    <span className="text-md font-extralight"> per kg</span>
                  </p>
                  <div className="mb-3">
                    <Image
                      src={product.rating}
                      alt="rating-icon"
                      width={100}
                      height={60}
                    />
                  </div>
                  <div className="">{product.itemsLeft} Items left</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default maturedBroiler;
