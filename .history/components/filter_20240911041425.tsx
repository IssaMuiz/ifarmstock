import Image from "next/image";

interface ratingImageProps {
  value: number;
  img: string;
}

type PriceType = [number, number] | null;
interface FilterProps {
  resetFilter: () => void;
  togglePrice: (range: PriceType) => void;
  toggleRating: (rate: number) => void;
  toggleBrand: (brand: string) => void;
  selectedBrand: string | null;
  ratingImages: ratingImageProps[];
  priceRange: PriceType;
  rating: number | null;
}

const Filter: React.FC<FilterProps> = ({
  resetFilter,
  toggleBrand,
  togglePrice,
  toggleRating,
  selectedBrand,
  priceRange,
  rating,
  ratingImages,
}) => {
  return (
    <section className="Left-side-sorting relative flex-col bg-white p-3 w-[300px] rounded-md h-[800px]">
      <div className="flex flex-col gap-2 border-b w-full border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base ">
          <legend className="text-lg font-semibold mb-2 ">Brand</legend>
          {["CHI", "Afrimash", "Zartech", "Obasanjo", "Local-farmer"].map(
            (brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 mb-2 cursor-pointer"
              >
                <div
                  className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                    selectedBrand === brand
                      ? "border-green-600 bg-green-600"
                      : "border-gray-400"
                  }`}
                ></div>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={() => toggleBrand(brand)}
                  className="mr-2 hidden"
                />
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
            <div
              className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                priceRange?.[0] === 1000 && priceRange?.[1] === 3000
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            ></div>
            <input
              type="checkbox"
              name="price"
              value="1000 - 3000"
              checked={priceRange?.[0] === 1000 && priceRange?.[1] === 3000}
              onChange={() => togglePrice([1000, 3000])}
              className="mr-2 hidden"
            />
            &#8358;1000 - &#8358;3000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <div
              className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                priceRange?.[0] === 3000 && priceRange[1] === 5000
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            ></div>
            <input
              type="checkbox"
              name="price"
              value="3000 - 5000"
              checked={priceRange?.[0] === 3000 && priceRange?.[1] === 5000}
              onChange={() => togglePrice([3000, 5000])}
              className="mr-2 hidden"
            />
            &#8358;3000 - &#8358;5000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <div
              className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                priceRange?.[0] === 5000 && priceRange?.[1] === 8000
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            ></div>
            <input
              type="checkbox"
              name="price"
              value="5000 - 8000"
              checked={priceRange?.[0] === 5000 && priceRange?.[1] === 8000}
              onChange={() => togglePrice([5000, 8000])}
              className="mr-2 hidden"
            />
            &#8358;5000 - &#8358;8000
          </label>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <div
              className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                priceRange?.[0] === 8000 && priceRange?.[1] === 10000
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            ></div>
            <input
              type="checkbox"
              name="price"
              value="8000 - 10000"
              checked={priceRange?.[0] === 8000 && priceRange?.[1] === 10000}
              onChange={() => togglePrice([8000, 10000])}
              className="mr-2 hidden"
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
            >
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  rating === rate.value
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="rating"
                value={rate.value}
                checked={rating === rate.value}
                onChange={() => toggleRating(rate.value)}
                className="mr-2 hidden"
              />
              <Image
                src={rate.img}
                alt={`${rate.value} Star`}
                width={50}
                height={10}
                className="w-16 h-4"
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