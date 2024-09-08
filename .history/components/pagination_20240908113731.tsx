interface PaginationProps {
  currentPage: number;
  handlePrevPage: () => void;
  getPagenumbers: () => number[];
  handlePageClick: (pageNumber: number) => void;
  totalPages: number;
  handleNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePrevPage,
  getPagenumbers,
  handlePageClick,
  totalPages,
  handleNextPage,
}) => {
  return (
    <div className="flex gap-4 mx-auto">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className={`border tablet:p-3 mobile:p-1 text-base ${
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
          } border border-gray-300 tablet:px-4 mobile:px-2 tablet:py-1 hover:border-green-600`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className={`border tablet:p-3 mobile:p-1 tablet:text-base mobile:text-sm ${
          currentPage === totalPages
            ? " border-gray-300 text-gray-300 "
            : "hover:border-green-600 cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
