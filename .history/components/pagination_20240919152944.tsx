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
  const visiblePage = 3;

  const startPage = Math.max(currentPage - Math.floor(visiblePage / 2), 1);
  const endPage = Math.min(startPage + visiblePage - 1, totalPages);

  const pageNumber = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }
  return (
    <div className="flex tablet:gap-4 mobile:gap-2 mx-auto mt-5">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className={`border tablet:p-3 mobile:p-1 tablet:text-base mobile:text-sm  ${
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
