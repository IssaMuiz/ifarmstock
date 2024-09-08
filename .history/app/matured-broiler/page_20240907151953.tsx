"use client";
import Image from "next/image";
import broiler from "@/models/broiler.json";
import React, { useEffect, useState } from "react";

interface ProductType {
  id: number;
  image: string;
  name: string;
  Price: number;
  weight: string;
  rating: number;
  itemsLeft: string;
  isBestSeller: boolean;
  dateAdded: string;
  brand: string;
}

const MaturedBroiler = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortingSelected, setSortingSelected] = useState<string>("bestSellers");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [rating, setRating] = useState(0);

  const applyFiltered = () => {
    let filtered = products;

    if (priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.Price >= priceRange[0] && product.Price <= priceRange[1]
      );
    }
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }
    if (rating > 0) {
      filtered = filtered.filter((product) => product.rating >= rating);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFiltered();
  }, [selectedBrand, priceRange, rating, products]);

  const sortingOptions = [
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to low" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "bestSellers", label: "Best Sellers" },
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionChange = (e: any) => {
    setSortingSelected(e.target.value);
    setIsOpen(true);
  };

  const selectedLabel =
    sortingOptions.find((option) => option.value === sortingSelected)?.label ||
    "Selected";

  const sortProducts = (
    option: string,
    products: ProductType[]
  ): ProductType[] => {
    let sortedProducts = [...products];
    if (option === "bestSellers") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.isBestSeller === b.isBestSeller ? 0 : a.isBestSeller ? -1 : 1
      );
    } else if (option === "lowToHigh") {
      sortedProducts = sortedProducts.sort((a, b) => a.Price - b.Price);
    } else if (option === "highToLow") {
      sortedProducts = sortedProducts.sort((a, b) => b.Price - a.Price);
    } else if (option === "newest") {
      sortedProducts = sortedProducts.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    }
    return sortedProducts;
  };

  useEffect(() => {
    const sorted = sortProducts(sortingSelected, broiler);
    setProducts(sorted);
  }, [sortingSelected]);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortingSelected(e.target.value);
  };
  const ProductsPerPage = 6;

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;

  const currentProducts = broiler.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(broiler.length / ProductsPerPage);

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
    <section className="flex gap-5 mx-10 mt-20 h-auto">
      <div className="Left-side-sorting mobile:hidden tablet:flex flex-col bg-white p-3 w-[350px] rounded-md h-[700px]">
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <fieldset className="text-xl font-semibold">
            <legend>Brand</legend>
            {["CHI", "Afrimash", "Zartech", "Obasanjo", "Local-farmer"].map(
              (brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                    className="mr-2"
                  />{" "}
                  {brand}
                </label>
              )
            )}
          </fieldset>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <fieldset className="text-xl font-semibold">
            <legend>Price</legend>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                value="1000 - 3000"
                checked={priceRange[0] === 1000 && priceRange[1] === 3000}
                onChange={() => setPriceRange([1000, 3000])}
                className="mr-2"
              />
              &#8358;1000 - &#8358;3000
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                value="3000 - 5000"
                checked={priceRange[0] === 3000 && priceRange[1] === 5000}
                onChange={() => setPriceRange([3000, 5000])}
                className="mr-2"
              />
              &#8358;3000 - &#8358;5000
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                value="5000 - 8000"
                checked={priceRange[0] === 5000 && priceRange[1] === 8000}
                onChange={() => setPriceRange([5000, 8000])}
                className="mr-2"
              />
              &#8358;5000 - &#8358;8000
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                value="8000 - 10000"
                checked={priceRange[0] === 8000 && priceRange[1] === 10000}
                onChange={() => setPriceRange([8000, 10000])}
                className="mr-2"
              />
              &#8358;8000 - &#8358;10000
            </label>
          </fieldset>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
        <fieldset className="text-xl font-semibold">
            <legend>Brand</legend>
            {["CHI", "Afrimash", "Zartech", "Obasanjo", "Local-farmer"].map(
              (brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                    className="mr-2"
                  />{" "}
                  {brand}
                </label>
              )
            )}
          </fieldset>
          </div>
        </div>
      </div>
      <div className="Broiler-cards h-auto bg-white p-3 w-full rounded-md items-center ">
        <div className="flex justify-between mx-10">
          <div>
            <h1 className="text-2xl ">Matured Live Broiler</h1>
          </div>

          <div
            onClick={toggleDropdown}
            className="flex items-center gap-1 cursor-pointer relative"
          >
            <p className="text-base">Sort by: {selectedLabel} </p>
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
                      onClick={() =>
                        handleOptionChange({ target: { value: option.value } })
                      }
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
          </div>
        </div>
        <div className="bg-white h-auto w-auto tablet:p-4 mobile:p-1">
          <ul className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 p-4">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all hover:duration-300 hover:ease-in-out flex-col tablet:min-w-[200px] mobile:min-w-[120px] tablet:p-7 tablet:gap-3 mobile:p-2 mobile:gap-1 rounded-md cursor-pointer"
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
                    <span>{product.weight}</span> of{" "}
                    <span>{product.brand}</span> {product.name}
                  </p>
                  <p className="font-semibold text-lg mb-3">
                    &#8358;{product.Price}
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
                  <div className="">{product.itemsLeft} Items left</div>
                  <div>
                    {product.isBestSeller && <span>(Best Seller)</span>}
                  </div>
                  <div>Harvested on {product.dateAdded}</div>
                </div>
                <button
                  type="button"
                  className="border w-full bg-green-600 hover:bg-green-700 text-white p-2 font-semibold rounded-md text-base"
                >
                  Add To Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 mx-auto">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className={`border p-3 text-base ${
              currentPage === 1
                ? " border-gray-300 text-gray-300 "
                : "hover:border-green-600 "
            }`}
          >
            Prev
          </button>
          {getPagenumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "active bg-green-600 text cursor-pointer"
                  : ""
              } border border-gray-300 px-4 py-1 hover:border-green-600`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className={`border p-3 text-base ${
              currentPage === totalPages
                ? " border-gray-300 text-gray-300 "
                : "hover:border-green-600 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaturedBroiler;
