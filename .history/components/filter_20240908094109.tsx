import Image from "next/image";

interface ratingImageProps {
  value: number;
  img: string;
}

interface FileterProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  ratingImages: ratingImageProps[];
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
  rating: number;
  setRating: (rating: number) => void;
}

const Filter: React.FC<FileterProps> = ({
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  rating,
  setRating,
  ratingImages,
}) => {
  return (
    <section className="Left-side-sorting mobile:hidden tablet:flex flex-col bg-white p-3 w-[350px] rounded-md h-[700px]">
      <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base">
          <legend className="text-lg font-semibold mb-2 ">Brand</legend>
          {["CHI", "Afrimash", "Zartech", "Obasanjo", "Local-farmer"].map(
            (brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-green-600"
              >
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand)}
                  className="mr-2 "
                />{" "}
                {brand}
              </label>
            )
          )}
        </fieldset>
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base">
          <legend className="text-lg font-semibold mb-2">Price</legend>

          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="1000 - 3000"
              checked={priceRange[0] === 1000 && priceRange[1] === 3000}
              onChange={() => setPriceRange([1000, 3000])}
              className="mr-2 "
            />
            &#8358;1000 - &#8358;3000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="3000 - 5000"
              checked={priceRange[0] === 3000 && priceRange[1] === 5000}
              onChange={() => setPriceRange([3000, 5000])}
              className="mr-2 "
            />
            &#8358;3000 - &#8358;5000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="5000 - 8000"
              checked={priceRange[0] === 5000 && priceRange[1] === 8000}
              onChange={() => setPriceRange([5000, 8000])}
              className="mr-2 "
            />
            &#8358;5000 - &#8358;8000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="8000 - 10000"
              checked={priceRange[0] === 8000 && priceRange[1] === 10000}
              onChange={() => setPriceRange([8000, 10000])}
              className="mr-2 "
            />
            &#8358;8000 - &#8358;10000
          </label>
        </fieldset>
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base">
          <legend className="text-lg font-semibold mb-2">Rating</legend>
          {ratingImages.map((rate) => (
            <label
              key={rate.value}
              className="flex items-center gap-2 cursor-pointer mb-2"
              onClick={() => setRating(rate.value)}
            >
              <input
                type="radio"
                name="rating"
                value={rate.value}
                checked={rating === rate.value}
                onChange={() => setRating(rate.value)}
                className="mr-2"
              />
              <Image
                src={rate.img}
                alt={`${rate.value} Star`}
                width={50}
                height={10}
                className="w-20 h-5"
              />
              & above
            </label>
          ))}
        </fieldset>
      </div>
    </section>
  );
};

export default Filter;
