"use client";
import Image from "next/image";
import broiler from "@/models/broiler.json";
import { useState } from "react";

const MaturedBroiler = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    <section className="flex gap-5 mx-7 mt-20 h-auto">
      <div className="Left-side-sorting mobile:hidden tablet:flex flex-col bg-white p-3 w-[350px] rounded-md h-[700px]">
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <h1 className="text-xl font-semibold">Brand</h1>
          <div className="flex items-center gap-1">
            <input id="Local-farmer" type="radio" name="brand" value="1" />
            <label className="text-base ml-2" htmlFor="Local-farmer">
              Local farmer
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Agrited" type="radio" name="brand" value="2" />
            <label className="text-base ml-2" htmlFor="Agrited">
              Agrited
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Chi" type="radio" name="brand" value="3" />
            <label className="text-base ml-2" htmlFor="Chi">
              Chi
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Zartech" type="radio" name="brand" value="4" />
            <label className="text-base ml-2" htmlFor="Zartech">
              Zartech
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="Afrimash" type="radio" name="brand" value="5" />
            <label className="text-base ml-2" htmlFor="Afrimash">
              Afrimash
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <h1 className="text-xl font-semibold">Price</h1>
          <div className="flex items-center gap-1">
            <input id="1" type="radio" name="price" value="1" />
            <label className="text-base ml-2" htmlFor="1">
              under &#8358;4000
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="2" type="radio" name="price" value="2" />
            <label className="text-base ml-2" htmlFor="2">
              &#8358;4000 - &#8358;10000
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="3" type="radio" name="price" value="3" />
            <label className="text-base ml-2" htmlFor="3">
              &#8358;10000 - &#8358;15000
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="4" type="radio" name="price" value="4" />
            <label className="text-base ml-2" htmlFor="4">
              &#8358;15000 - &#8358;20000
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="5" type="radio" name="price" value="5" />
            <label className="text-base ml-2" htmlFor="5">
              &#8358;20000 - Above
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 p-3 mb-3 pb-5">
          <h1 className="text-xl font-semibold">Product Rating</h1>
          <div className="flex items-center gap-1">
            <input id="rating-5" type="radio" name="rating" value="5" />
            <label className="text-base ml-2" htmlFor="rating-5">
              <Image
                src="/assets/icons/rating-50.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-4" type="radio" name="rating" value="4" />
            <label className="text-base ml-2" htmlFor="rating-4">
              <Image
                src="/assets/icons/rating-40.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-3" type="radio" name="rating" value="3" />
            <label className="text-base ml-2" htmlFor="rating-3">
              <Image
                src="/assets/icons/rating-40.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-2" type="radio" name="rating" value="4" />
            <label className="text-base ml-2" htmlFor="rating-2">
              <Image
                src="/assets/icons/rating-20.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input id="rating-1" type="radio" name="rating" value="1" />
            <label className="text-base ml-2" htmlFor="rating-1">
              <Image
                src="/assets/icons/rating-10.png"
                alt=""
                width={80}
                height={40}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="Broiler-cards h-auto bg-white p-3 w-full rounded-md items-center ">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Matured Broiler</h1>
          </div>

          <div className="flex gap-1">
            <p>Sort by: Popularity </p>
            <div>
              <Image
                src="/assets/icons/arrow-down.png"
                alt="arrow-icon"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
        <div className="bg-white h-auto w-auto tablet:p-4 mobile:p-1">
          <ul className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 p-4">
            {currentProducts.map((product, index) => (
              <li
                key={index}
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
                    <span>{product.weight}</span> of {product.name}
                  </p>
                  <p className="font-semibold text-lg mb-3">
                    &#8358;{product.Price}
                    <span className="text-md font-extralight"> per kg</span>
                  </p>
                  <div className="mb-3">
                    <Image
                      src={product.rating}
                      alt="rating-icon"
                      width={100}
                      height={60}
                    />
                  </div>
                  <div className="">{product.itemsLeft} Items left</div>
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
