"use client";
import Image from "next/image";
import broiler from "@/models/broiler.json";
import React, { useEffect, useState } from "react";
import Sorting from "@/components/sorting";
import Filter from "@/components/filter";
import Pagination from "@/components/pagination";

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
  const [products, setProducts] = useState<ProductType[]>(broiler);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortingSelected, setSortingSelected] = useState<string>("bestSellers");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [rating, setRating] = useState(0);
  const productPerPage = 6;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

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

  useEffect(() => {
    let filtered = [...broiler];

    if (sortingSelected === "bestSellers") {
      filtered = filtered.sort((a, b) =>
        a.isBestSeller === b.isBestSeller ? 0 : a.isBestSeller ? -1 : 1
      );
    } else if (sortingSelected === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.Price - b.Price);
    } else if (sortingSelected === "highToLow") {
      filtered = filtered.sort((a, b) => b.Price - a.Price);
    } else if (sortingSelected === "newest") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    }

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

    const currentProducts = filtered.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setProducts(currentProducts);
  }, [
    selectedBrand,
    priceRange,
    rating,
    sortingSelected,
    productPerPage,
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct,
  ]);

  const sortingOptions = [
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to low" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "bestSellers", label: "Best Sellers" },
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectedLabel =
    sortingOptions.find((option) => option.value === sortingSelected)?.label ||
    "Selected";

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortingSelected(e.target.value);
  };

  const handleLabelClick = (sortType: string) => {
    setSortingSelected(sortType);
  };

  const totalPages = Math.ceil(broiler.length / productPerPage);

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
    <section className="flex gap-5 tablet:mx-8 tablet:mt-20 mobile:mt-24 h-auto">
      <Filter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        rating={rating}
        setRating={setRating}
        ratingImages={ratingImages}
      />
      {products.length === 0 ? (
        <div className="bg-white w-96 rounded-md h-56 flex flex-col items-center text-center mx-auto mt-20">
          <p className="text-lg font-semibold pt-10">
            This product search option is not available
          </p>
          <span>Please try other options</span>
        </div>
      ) : (
        <div>
          <div className="text-center h-20 mobile:block tablet:hidden text-2xl mt-8 fixed top-16 left-0 z-10 right-0 text-black bg-white pb-2">
            <p className="mt-6">Mature Live Broiler</p>
            {/* <div className="flex justify-center text-black mt-2 bg-gray-100 text-lg p-2">
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
            </div> */}
          </div>
          <div className="Broiler-cards h-auto bg-white p-3 w-full rounded-md items-center">
            <div className="flex justify-between mx-10 tablet:flex mobile:">
              <div>
                <h1 className="desktop:text-2xl tablet:text-lg ">
                  Matured Live Broiler
                </h1>
              </div>

              <Sorting
                toggleDropdown={toggleDropdown}
                selectedLabel={selectedLabel}
                sortingOptions={sortingOptions}
                isOpen={isOpen}
                handleLabelClick={handleLabelClick}
                sortingSelected={sortingSelected}
                handleSortChange={handleSortChange}
              />
            </div>

            <div className="bg-white h-auto flex flex-col items-center w-auto tablet:p-4 mobile:p-0 mt-16">
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

export default MaturedBroiler;
