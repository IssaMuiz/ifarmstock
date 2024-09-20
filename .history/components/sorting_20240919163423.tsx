import Image from "next/image";
import { useEffect, useState } from "react";

interface sortingType {
  toggleDropdown: () => void;
  selectedLabel: string;
  isOpen: boolean;
  handleLabelClick: (sortType: string) => void;
  handleSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSortOpen: boolean;
  onSortChange: (value: string) => void;
}

const Sorting: React.FC<sortingType> = ({
  isSortOpen,
  toggleDropdown,
  selectedLabel,
  isOpen,
  handleLabelClick,
  onSortChange,
}) => {
  const [sortingSelected, setSortingSelected] = useState<string>("bestSeller");
  const sortingOptions = [
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to low" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "bestSeller", label: "Best Sellers" },
  ];

  useEffect(() => {
    onSortChange(sortingSelected);
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSortChange(value);
  };
  return (
    <fieldset>
      {/* Sorting Mobile view */}
      <div>
        {isSortOpen ? (
          <div className="py-5 ">
            {sortingOptions.map((option) => (
              <label
                onClick={() => handleLabelClick(option.value)}
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer mb-4 text-gray-700 hover:text-gray-900 w-max"
              >
                <div
                  className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 ${
                    sortingSelected === option.value
                      ? "border-green-600 bg-green-600"
                      : "border-gray-400"
                  }`}
                ></div>

                <input
                  type="radio"
                  name="sorting"
                  value={option.value}
                  checked={sortingSelected === option.value}
                  onChange={handleSortChange}
                  className="form-radio hidden"
                />
                <span className="ml-2 text-base">{option.label}</span>
              </label>
            ))}
          </div>
        ) : (
          <div
            /* Sorting Desktop view */
            onClick={toggleDropdown}
            className="flex items-center gap-1  cursor-pointer relative"
          >
            <div className="flex items-center gap-1 tablet:flex mobile:hidden">
              <legend className="text-base ">Sort by: {selectedLabel} </legend>
              <div>
                <Image
                  src="/assets/icons/arrow-down-black.png"
                  alt="arrow-icon"
                  width={15}
                  height={15}
                />
              </div>
            </div>

            {isOpen && (
              <div className="absolute z-10 h-auto mt-10 w-56 top-1  origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-5 ">
                  {sortingOptions.map((option) => (
                    <label
                      onClick={() => handleLabelClick(option.value)}
                      key={option.value}
                      className="flex items-center px-4 py-2 cursor-pointer mb-4 text-gray-700 hover:text-gray-900 w-max"
                    >
                      <div
                        className={`w-2 h-2 mr-2 relative p-2 rounded-full border-2 ${
                          sortingSelected === option.value
                            ? "border-green-600 bg-green-600"
                            : "border-gray-400"
                        }`}
                      ></div>

                      <input
                        type="radio"
                        name="sorting"
                        value={option.value}
                        checked={sortingSelected === option.value}
                        onChange={handleSortChange}
                        className="form-radio hidden"
                      />
                      <span className="ml-2 text-base">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default Sorting;
