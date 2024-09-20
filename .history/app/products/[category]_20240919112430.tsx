"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sorting from "../../components/sorting";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/redux/cartSlice";
import PriceDisplay from "../../components/priceDisplay";
import { MouseEvent } from "react";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        const response = await fetch(
          `/app/api/products?category=${category}&${new URLSearchParams(
            router.query as Record<string, string>
          )}`
        );

        const data = await response.json();

        setProducts(data.products);
      };
      fetchProducts();
    }
  }, [category, router.query]);

  const hideWeightFilter = category === "day-old-chicks";
  return (
    <section className="flex gap-5 tablet:mx-8 tablet:mt-20 mobile:mt-24">
      {
        <div className="mobile:hidden tablet:flex">
          <Filter />
        </div>
      }
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
            <p className="mt-6">Live Chickens Bulk Purchases</p>
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
                    priceRange={liveChickensPriceRange}
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
                  {category} Products
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
                        {category === "Matured Live Broiler" && (
                          <p>
                            {" "}
                            <span>{product.weight}kg</span>
                            <span className="mx-1">of</span>{" "}
                          </p>
                        )}
                        <span>{product.brand}</span> {product.name}
                      </p>
                      <p className="font-semibold text-lg mb-3">
                        <PriceDisplay price={product.price} />
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
                    <div>Minimun order: {product.minimum} birds</div>
                    <div>Minimum order for discounted price: 100 birds</div>
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

export default ProductCategory;
