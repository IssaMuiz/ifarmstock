import Image from "next/image"

interface sortingOptionTypes {
  value: string
  label: string
}
interface sortingType {
toggleDropdown: () => void
selectedLabel: string
sortingOptions: sortingOptionTypes[]
isOpen: boolean
handleLabelClick: () => void
sortingSelected: string
handleSortChange: () => void
}

const Sorting: React.FC<sortingType> = ({toggleDropdown, selectedLabel, sortingOptions, isOpen, handleLabelClick, sortingSelected, handleSortChange}) => {
  
  }
  return (
    <fieldset
            onClick={toggleDropdown}
            className="flex items-center gap-1 cursor-pointer relative"
          >
            <legend className="text-base">Sort by: {selectedLabel} </legend>
            <div>
              <Image
                src="/assets/icons/arrow-down-black.png"
                alt="arrow-icon"
                width={15}
                height={15}
              />
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
                        className={`w-4 h-4 mr-2 relative p-2 rounded-full border-2 ${
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
          </fieldset>
  )
}

export default Sorting
