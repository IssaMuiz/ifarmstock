import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

interface ratingImageProps {
  value: number;
  img: string;
}

type weightType = [number, number] | null;
interface FilterProps {
  priceRange: number[][];
  showWeightFilter?: boolean;
  resetFilter: () => void;
  togglePrice: (range: number[]) => void;
  toggleWeight: (range: weightType) => void;
  toggleRating: (rate: number) => void;
  toggleBrand: (brand: string) => void;
  selectedBrand: string | null;
  ratingImages: ratingImageProps[];
  selectedPriceRange: number[] | null;
  weightRange?: weightType;
  rating: number | null;
}

const Filter: React.FC<FilterProps> = ({
  selectedPriceRange,
  showWeightFilter,
  toggleWeight,
  toggleBrand,
  togglePrice,
  toggleRating,
  selectedBrand,
  priceRange,
  weightRange,
  rating,
  ratingImages,
}) => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [minWeight, setMinWeight] = useState<number | undefined>();
  const [maxWeight, setMaxWeight] = useState<number | undefined>();

  /* const router = useRouter();
  const { category } = router.query;

  const handleFilter = () => {
    let filterQuery = `/app/api/products?category=${category}`;
    if (minPrice) filterQuery += `&minPrice=${minPrice}`;
    if (maxPrice) filterQuery += `&maxPrice=${maxPrice}`;
    if (minWeight && category === "Matured Live Broiler") {
      filterQuery += `&minWeight=${minWeight}`;
    }
    if (maxWeight && category === "Matured Live Broiler") {
      filterQuery += `&maxWeight=${maxWeight}`;
    }
    fetch(filterQuery);
  }; */
  return (
    <section className="Left-side-sorting relative flex-col bg-white p-3 mobile:w-full tablet:w-[250px] text-left rounded-md mobile:h-full tablet:max-h-[900px]">
      <div
        className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5 text-left
      "
      >
        <fieldset className="text-base text-left">
          <legend className="text-lg font-semibold mb-2 ">Brand</legend>
          {["CHI", "Afrimash", "Zartech", "Obasanjo", "Local-farmer"].map(
            (brand) => (
              <label
                key={brand}
                className=" mb-2 cursor-pointer flex gap-2 w-max "
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
                <span>{brand}</span>
              </label>
            )
          )}
        </fieldset>
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base">
          <legend className="text-lg font-semibold mb-2">Price</legend>
          {priceRange.map((range, index) => (
            <label
              key={index}
              className="flex items-center gap-2 mb-2 cursor-pointer w-max"
            >
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  !!(
                    selectedPriceRange &&
                    selectedPriceRange[0] === range[0] &&
                    selectedPriceRange[1] === range[1]
                  )
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="priceRange"
                value={`${range[0]} - ${range[1]}`}
                checked={
                  !!(
                    selectedPriceRange &&
                    selectedPriceRange[0] === range[0] &&
                    selectedPriceRange[1] === range[1]
                  )
                }
                onChange={() => togglePrice(range)}
                className="mr-2 hidden"
              />
              &#8358;{range[0]} - &#8358;{range[1]}
            </label>
          ))}
        </fieldset>
      </div>
      {weightRange && (
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <fieldset className="text-base">
            <legend className="text-lg font-semibold mb-2">Weight</legend>

            <label className="flex items-center gap-2 mb-2 cursor-pointer w-max">
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  weightRange?.[0] === 0 && weightRange?.[1] === 2
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="weight"
                value="0 - 2"
                checked={weightRange?.[0] === 0 && weightRange?.[1] === 2}
                onChange={() => toggleWeight([0, 2])}
                className="mr-2 hidden"
              />
              0 - 2kg
            </label>
            <label className="flex items-center gap-2 mb-2 cursor-pointer w-max">
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  weightRange?.[0] === 3 && weightRange[1] === 5
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="weight"
                value="3 - 5"
                checked={weightRange?.[0] === 3 && weightRange?.[1] === 5}
                onChange={() => toggleWeight([3, 5])}
                className="mr-2 hidden"
              />
              3kg - 5kg
            </label>
            <label className="flex items-center gap-2 mb-2 cursor-pointer w-max">
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  weightRange?.[0] === 6 && weightRange?.[1] === 8
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="weight"
                value="6 - 8"
                checked={weightRange?.[0] === 6 && weightRange?.[1] === 8}
                onChange={() => toggleWeight([6, 8])}
                className="mr-2 hidden"
              />
              6kg - 8kg
            </label>
            <label className="flex items-center gap-2 mb-2 cursor-pointer w-max">
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  weightRange?.[0] === 9 && weightRange?.[1] === 10
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="weight"
                value="8000 - 10000"
                checked={weightRange?.[0] === 9 && weightRange?.[1] === 10}
                onChange={() => toggleWeight([9, 10])}
                className="mr-2 hidden"
              />
              9kg - 10kg
            </label>
          </fieldset>
        </div>
      )}

      <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-base">
          <legend className="text-lg font-semibold mb-2">Rating</legend>
          {ratingImages.map((rate) => (
            <label
              key={rate.value}
              className="flex items-center gap-2 cursor-pointer mb-2 w-max"
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
