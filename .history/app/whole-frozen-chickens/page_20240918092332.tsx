"use client";
import Image from "next/image";
import broiler from "@/public/models/wholeFrozenChickens.json";
import React, { useEffect, useState } from "react";
import Sorting from "@/components/sorting";
import Filter from "@/components/filter";
import Pagination from "@/components/pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/components/redux/cartSlice";
import PriceDisplay from "@/components/priceDisplay"
import { MouseEvent } from "react";
interface ProductType {
  id: number;
  image: string;
  name: string;
  price: number;
  weight: number;
  rating: number;
  itemsLeft: number;
  isBestSeller: boolean;
  dateAdded: string;
  brand: string;
}

type weightType = [number, number] | null;

const WholeFrozenChickens = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilteredOpen, setIsFilteredOpen] = useState(false);
  const [sortingSelected, setSortingSelected] = useState<string>("bestSellers");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[] | null>(null);
  const [weightRange, setWeightRange] = useState<weightType>([0, 10]);
  const [rating, setRating] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  const productPerPage = 6;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const sortingOptions = [
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to low" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "bestSellers", label: "Best Sellers" },
  ];

  const broilerPriceRange = [
    [1000, 2000],
    [3000, 5000],
    [6000, 8000],
    [9000, 10000],
  ];

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

  const selectedLabel =
    sortingOptions.find((option) => option.value === sortingSelected)?.label ||
    "Selected";

  useEffect(() => {
    const filteredProducts = () => {
      setLoading(true);

      let filtered = [...broiler];

      if (sortingSelected === "bestSellers") {
        filtered = filtered.sort((a, b) =>
          a.isBestSeller === b.isBestSeller ? 0 : a.isBestSeller ? -1 : 1
        );
      } else if (sortingSelected === "lowToHigh") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sortingSelected === "highToLow") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (sortingSelected === "newest") {
        filtered = filtered.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      }

      if (priceRange) {
        filtered = filtered.filter(
          (product) =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      }

      if (weightRange) {
        filtered = filtered.filter(
          (product) =>
            product.weight >= weightRange[0] && product.weight <= weightRange[1]
        );
      }
      if (selectedBrand) {
        filtered = filtered.filter(
          (product) => product.brand === selectedBrand
        );
      }
      if (rating !== null && rating > 0) {
        filtered = filtered.filter((product) => product.rating >= rating);
      }

      const newTotalPages = Math.ceil(filtered.length / productPerPage);

      setTotalPages(newTotalPages);

      if (currentPage > newTotalPages) {
        setCurrentPage(1);
      }
      const currentProducts = filtered.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      setProducts(currentProducts);
      setLoading(false);
    };

    filteredProducts();
  }, [
    weightRange,
    selectedBrand,
    priceRange,
    rating,
    sortingSelected,
    productPerPage,
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct,
  ]);

  const handleAddToCart =
    (product: ProductType) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault;
      dispatch(addToCart(product));
    };

  const resetFilter = () => {
    setSelectedBrand(null);
    setPriceRange(null);
    setRating(null);
  };

  const handleGoBack = () => {
    resetFilter();
  };

  const toggleBrand = (brand: string) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
    }
  };

  const toggleRating = (rate: number) => {
    if (rating === rate) {
      setRating(null);
    } else {
      setRating(rate);
    }
  };

  const togglePrice = (range: number[]) => {
    setPriceRange((prev) =>
      prev && prev[0] === range[0] && prev[1] === range[1] ? null : range
    );
  };

  const toggleWeight = (range: weightType) => {
    if (weightRange?.[0] === range?.[0] && weightRange?.[1] === range?.[1]) {
      setWeightRange([0, 10000]);
    } else {
      setWeightRange(range);
    }
  };

  const toggleSortDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleSortPanel = () => {
    setIsSortOpen((prev) => !prev);
  };
  const toggleFilteredPanel = () => {
    setIsFilteredOpen((prev) => !prev);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortingSelected(e.target.value);
    setIsSortOpen(false);
  };

  const handleLabelClick = (sortType: string) => {
    setSortingSelected(sortType);
    setIsSortOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const getPagenumbers = () => {
    const maxVisiblePages = 3;

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;

      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="flex gap-5 tablet:mx-8 tablet:mt-20 mobile:mt-24">
      {!loading && (
        <div className="mobile:hidden tablet:flex">
          <Filter
            priceRange={broilerPriceRange}
            showWeightFilter={true}
            resetFilter={resetFilter}
            togglePrice={togglePrice}
            toggleBrand={toggleBrand}
            toggleWeight={toggleWeight}
            toggleRating={toggleRating}
            selectedBrand={selectedBrand}
            selectedPriceRange={priceRange}
            weightRange={weightRange}
            rating={rating}
            ratingImages={ratingImages}
          />
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        /* Empty Products cards */
        <div className="bg-white w-96 rounded-md h-56 flex flex-col items-center text-center mx-auto mt-20">
          <p className="text-lg font-semibold pt-10">
            This product search option is not available
          </p>
          <span>Please try other options</span>
          <button className="bg-gray-300 p-2" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      ) : (
        <div>
          <div className="text-center h-20 mobile:block tablet:hidden text-2xl mt-8 fixed top-16 left-0 z-10 right-0 text-black bg-white">
            <p className="mt-6">Whole Frozen Chickens</p>
            {/* Mobile view Sort and Filter button */}
            <div className="flex justify-evenly text-black mt-2 bg-white text-lg p-2 border-b-4 border-t-4">
              <div
                onClick={toggleSortPanel}
                className="flex gap-1 items-center w-max   cursor-pointer
              "
              >
                <Image
                  className="h-5 w-5"
                  src="/assets/icons/sort-50.png"
                  alt="sort-icon"
                  width={10}
                  height={10}
                />
                <button type="button" className="">
                  Sort
                </button>
              </div>
              <div className="border-r border-r-black "></div>
              <div
                onClick={toggleFilteredPanel}
                className="flex gap-1 items-center w-max cursor-pointer "
              >
                <Image
                  className="h-5 w-5"
                  src="/assets/icons/filter-24.png"
                  alt="sort-icon"
                  width={10}
                  height={10}
                />
                <button type="button">Filter</button>
              </div>

              {/* Sliding Sort Panel */}
              <div
                className={`fixed top-24 right-0 w-full bg-white h-full shadow-lg z-20 transform ${
                  isSortOpen ? "translate-x-0" : "-translate-x-full "
                } transition-transform duration-300 ease-in-out`}
              >
                <Sorting
                  isSortOpen={isSortOpen}
                  toggleDropdown={toggleSortDropdown}
                  selectedLabel={selectedLabel}
                  sortingOptions={sortingOptions}
                  isOpen={isOpen}
                  handleLabelClick={handleLabelClick}
                  sortingSelected={sortingSelected}
                  handleSortChange={handleSortChange}
                />
                <button
                  onClick={toggleSortPanel}
                  className="absolute top-2 right-2 text-3xl"
                >
                  &times;
                </button>
              </div>

              {/* Sliding Filter Panel */}
              <div
                className={`fixed top-24 left-0 max-h-screen overflow-y-auto bg-white h-full w-full  shadow-lg z-20 transform ${
                  isFilteredOpen ? "translate-x-0" : "-translate-x-full "
                } transition-transform duration-300 ease-in-out`}
              >
                <div className="relative w-full h-full ">
                  <div className="flex justify-between items-center bg-white p-4 sticky top-0 z-20 shadow-md">
                    <div className="flex gap-2">
                      <button
                        className="bg-gray-500 p-1 text rounded-md"
                        onClick={toggleFilteredPanel}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={toggleFilteredPanel}
                        className="text p-1 rounded-md bg-green-600"
                      >
                        Apply
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={resetFilter}
                      className="bg-red-600 text text p-1 rounded-md"
                    >
                      Reset
                    </button>
                  </div>

                  <Filter
                    priceRange={broilerPriceRange}
                    showWeightFilter={true}
                    resetFilter={resetFilter}
                    togglePrice={togglePrice}
                    toggleWeight={toggleWeight}
                    toggleBrand={toggleBrand}
                    toggleRating={toggleRating}
                    selectedBrand={selectedBrand}
                    selectedPriceRange={priceRange}
                    weightRange={weightRange}
                    rating={rating}
                    ratingImages={ratingImages}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop and tablet view Sorting */}
          <div className="Broiler-cards h-auto bg-white p-3 w-full rounded-md items-center pb-5">
            <div className="flex justify-between mx-10 tablet:flex mobile:hidden ">
              <div>
                <h1 className="desktop:text-2xl tablet:text-lg ">
                  Whole Frozen Chickens
                </h1>
              </div>

              <Sorting
                isSortOpen={isSortOpen}
                toggleDropdown={toggleSortDropdown}
                selectedLabel={selectedLabel}
                sortingOptions={sortingOptions}
                isOpen={isOpen}
                handleLabelClick={handleLabelClick}
                sortingSelected={sortingSelected}
                handleSortChange={handleSortChange}
              />
            </div>
            {/* Products Cards */}
            <div className="bg-white h-auto flex flex-col items-center w-auto tablet:mt-1 mobile:mt-24">
              <ul className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 tablet:p-4 mobile:p-1">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:min-w-[200px] mobile:min-w-[120px] tablet:p-7 tablet:gap-3 mobile:p-3 mobile:gap-1 rounded-md cursor-pointer"
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
                        <span>{product.weight}kg</span>
                        <span className="mx-1">of</span>
                        <span>{product.brand}</span> {product.name}
                      </p>
                      <p className="font-semibold text-lg mb-3">
                      <PriceDisplay price={product.price} />}
                        <span className="text-md font-extralight"> per kg</span>
                      </p>
                      <div className="mb-3">
                        <Image
                          src={`/assets/icons/rating-${product.rating}.png`}
                          alt="rating-icon"
                          width={100}
                          height={60}
                        />
                      </div>
                      <div className="">{product.itemsLeft} birds left</div>
                      <div>
                        {product.isBestSeller && <span>(Best Seller)</span>}
                      </div>
                      <div>Added on {product.dateAdded}</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddToCart(product)}
                      className="border w-full bg-green-600 hover:bg-green-700 text-white p-2 font-semibold rounded-md text-base"
                    >
                      Add To Cart
                    </button>
                  </li>
                ))}
              </ul>

              <Pagination
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                getPagenumbers={getPagenumbers}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WholeFrozenChickens;
