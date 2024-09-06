import Image from "next/image";

const maturedBroiler = () => {
  return (
    <section className="flex gap-3 mx-7 mt-20 h-screen">
      <div className="bg-white p-3 w-72">
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
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3">
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
      <div className="bg-white p-3">product</div>
    </section>
  );
};

export default maturedBroiler;
