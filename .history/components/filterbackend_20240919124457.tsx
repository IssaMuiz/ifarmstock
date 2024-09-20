import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import { queryObjects } from "v8";

interface FilterProps {
  category: string;
  onFilterchange: (filters: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterchange, category }) => {
  const [filter, setFilter] = useState({
    brand: "",
    weight: "",
    rating: 0,
    price: "",
  });

  const ratingImages = [
    {
      value: 40,
      img: "/assets/icons/rating-40.png",
    },
    {
      value: 30,
      img: "/assets/icons/rating-30.png",
    },
    {
      value: 20,
      img: "/assets/icons/rating-20.png",
    },
    {
      value: 10,
      img: "/assets/icons/rating-10.png",
    },
  ];

  const priceRanges =
    category === "day-old-chicks"
      ? [
          {
            label: "200 -300",
            value: "100-200",
          },
          {
            label: "400 -500",
            value: "400-500",
          },
          {
            label: "600 -700",
            value: "600-700",
          },
          {
            label: "800 -1000",
            value: "800-1000",
          },
        ]
      : [
          {
            label: "1000 -2000",
            value: "1000-2000",
          },
          {
            label: "3000 -5000",
            value: "3000-5000",
          },
          {
            label: "6000 -8000",
            value: "6000-8000",
          },
          {
            label: "9000 -10000",
            value: "9000-10000",
          },
        ];

  const weightRanges =
    category === "day-old-chicks"
      ? []
      : [
          {
            label: "0 - 2kg",
            value: "0-2",
          },
          {
            label: "3kg - 5kg",
            value: "3-5",
          },
          {
            label: "6kg - 7kg",
            value: "6-7",
          },
          {
            label: "8kg - 10kg",
            value: "8-10",
          },
        ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });

    onFilterchange({
      ...filter,
      [name]: value,
    });
  };

  return (
    <form className="Left-side-sorting relative flex-col bg-white p-3 mobile:w-full tablet:w-[250px] text-left rounded-md mobile:h-full tablet:max-h-[900px]">
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
                    filter.brand === brand
                      ? "border-green-600 bg-green-600"
                      : "border-gray-400"
                  }`}
                ></div>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={filter.brand === brand}
                  onChange={handleChange}
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
          {priceRanges.map((range, index) => (
            <label
              key={index}
              className="flex items-center gap-2 mb-2 cursor-pointer w-max"
            >
              <div
                className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                  filter.price === range.value
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="priceRange"
                value={range.value}
                checked={filter.price === range.value}
                onChange={handleChange}
                className="mr-2 hidden"
              />
              &#8358;{range.label}
            </label>
          ))}
        </fieldset>
      </div>
      {weightRanges.length > 0 && (
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <fieldset className="text-base">
            <legend className="text-lg font-semibold mb-2">Weight</legend>
            {weightRanges.map((range) => (
              <label
                key={range.value}
                className="flex items-center gap-2 mb-2 cursor-pointer w-max"
              >
                <div
                  className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 hover:border-green-600 ${
                    filter.weight === range.value
                      ? "border-green-600 bg-green-600"
                      : "border-gray-400"
                  }`}
                ></div>
                <input
                  type="checkbox"
                  name="weight"
                  value={range.value}
                  checked={filter.weight === range.value}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                0 - 2kg
              </label>
            ))}
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
                  filter.rating === rate.value
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              ></div>
              <input
                type="checkbox"
                name="rating"
                value={rate.value}
                checked={filter.rating === rate.value}
                onChange={handleChange}
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
    </form>
  );
};

export default Filter;
