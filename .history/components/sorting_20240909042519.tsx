import Image from "next/image";

interface sortingOptionTypes {
  value: string;
  label: string;
}
interface sortingType {
  toggleDropdown: () => void;
  selectedLabel: string;
  sortingOptions: sortingOptionTypes[];
  isOpen: boolean;
  handleLabelClick: (sortType: string) => void;
  sortingSelected: string;
  handleSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sorting: React.FC<sortingType> = ({
  toggleDropdown,
  selectedLabel,
  sortingOptions,
  isOpen,
  handleLabelClick,
  sortingSelected,
  handleSortChange,
}) => {
  return (
    <fieldset>
      <div className="text-center h-20 mobile:block tablet:hidden text-2xl mt-8 fixed top-16 left-0 z-10 right-0 text-black bg-white pb-2">
        <legend className="mt-6">Mature Live Broiler</legend>
        <div className="flex justify-center text-black mt-2 bg-gray-100 text-lg p-2">
          <button
            type="button"
            className="border-r border-r-black w-full hover:bg-gray-500"
            onClick={toggleDropdown}
          >
            Sort
          </button>
          <button type="button" className="w-full hover:bg-gray-500">
            Filter
          </button>
        </div>
      </div>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-1 tablet:flex cursor-pointer relative"
      >
        <div className="flex items-center gap-1 mobile:hidden tablet:flex">
          <legend className="text-base">Sort by: {selectedLabel} </legend>
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
                  className="flex items-center px-4 py-2 cursor-pointer mb-4 text-gray-700 hover:text-gray-900"
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
    </fieldset>
  );
};

export default Sorting;
