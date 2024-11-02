"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sorting from "../../../components/sorting";
import Filter from "../../../components/filterbackend";
import Pagination from "../../../components/pagination";
import { GetServerSideProps } from "next/types";
import { use } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../components/redux/cartSlice";
import PriceDisplay from "../../../components/priceDisplay";
import { MouseEvent } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/* 
interface ProductPageProps {
  category: string;
} */

interface DiscountType {
  minWeight: number;
  maxWeight: number | null;
  discount: number;
}

interface ProductType {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  weight?: number;
  rating: number;
  itemLeft: number;
  soldCount: number;
  hatchDate: string;
  dateAdded: string;
  brand: string;
  minimum: number;
  discountTier: DiscountType[];
}

const ProductCategory = ({ params }: { params: { category: string } }) => {
  const router = useRouter();
  const { category } = params;
  console.log(category);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({});
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(Number() || 1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilteredOpen, setIsFilteredOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const queryParams = new URLSearchParams({
          page: String(currentPage),
          limit: "6",
          category,
          ...filter,
          sort: sortOption,
        });

        const res = await fetch(`/api/products?${queryParams}`);
        const data = await res.json();

        setProducts(data.products);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    router.push(`/products/${category}?page=${currentPage}`, undefined);
  }, [
    router,
    category,
    filter,
    sortOption,
    currentPage,
    setCurrentPage,
    setTotalPages,
  ]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  /* const handleAddToCart =
    (product: ProductType) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault;
      dispatch(addToCart(product));
    }; */
  /* const resetFilter = () => {
    setSelectedBrand(null);
    setPriceRange(null);
    setRating(null);
  }; */

  /* const handleGoBack = () => {
    resetFilter();
  }; */

  /* const toggleBrand = (brand: string) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
    }
  }; */

  /* const toggleRating = (rate: number) => {
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
  }; */

  const toggleSortDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleSortPanel = () => {
    setIsSortOpen((prev) => !prev);
  };
  const toggleFilteredPanel = () => {
    setIsFilteredOpen((prev) => !prev);
  };

  const handleLabelClick = (sortType: string) => {
    setIsSortOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="flex gap-5 tablet:mx-8 tablet:mt-20 mobile:mt-24">
      {
        <div className="mobile:hidden tablet:flex">
          <Filter category={category} onFilterchange={setFilter} />
        </div>
      }
      {products.length === 0 ? (
        /* Empty Products cards */
        <div className="bg-white w-96 rounded-md h-56 flex flex-col items-center text-center mx-auto mt-20">
          <p className="text-lg font-semibold pt-10">
            This product search option is not available
          </p>
          <span>Please try other options</span>
          <button className="bg-gray-300 p-2">Go Back</button>
        </div>
      ) : (
        <div>
          <div className="text-center h-20 mobile:block tablet:hidden text-2xl mt-8 fixed top-16 left-0 z-10 right-0 text-black bg-white">
            <p className="mt-6">
              <div>Category: {category}</div>
            </p>
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
                  onSortChange={setSortOption}
                  toggleDropdown={toggleSortDropdown}
                  isSortOpen={isSortOpen}
                  isOpen={isOpen}
                  handleLabelClick={handleLabelClick}
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
                      className="bg-red-600 text text p-1 rounded-md"
                    >
                      Reset
                    </button>
                  </div>

                  <Filter category={category} onFilterchange={setFilter} />
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
                onSortChange={setSortOption}
                toggleDropdown={toggleSortDropdown}
                isSortOpen={isSortOpen}
                isOpen={isOpen}
                handleLabelClick={handleLabelClick}
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
                      <div className="">{product.itemLeft} birds left</div>
                      <div>
                        {product.soldCount && <span>(Best Seller)</span>}
                      </div>
                      <div>Added on {product.dateAdded}</div>
                    </div>
                    <div>Minimun order: {product.minimum} birds</div>
                    <div>Minimum order for discounted price: 100 birds</div>
                    <button
                      type="button"
                      /* onClick={handleAddToCart(product)} */
                      className="border w-full bg-green-600 hover:bg-green-700 text-white p-2 font-semibold rounded-md text-base"
                    >
                      Add To Cart
                    </button>
                  </li>
                ))}
              </ul>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  console.log(context.params);
  const { category } = context.params as { category: string };

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
}; */

export default ProductCategory;
