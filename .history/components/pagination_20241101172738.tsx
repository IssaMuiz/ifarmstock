interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageClick: () => void;
  getPagenumbers: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageClick,
  getPagenumbers,
}) => {
  const visiblePage = 3;

  const startPage = Math.max(currentPage - Math.floor(visiblePage / 2), 1);
  const endPage = Math.min(startPage + visiblePage - 1, totalPages);

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex tablet:gap-4 mobile:gap-2 mx-auto mt-5">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePrevPage}
        className={`border tablet:p-3 mobile:p-1 tablet:text-base mobile:text-sm  ${
          currentPage === 1
            ? " border-gray-300 text-gray-300 "
            : "hover:border-green-600 "
        }`}
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick}
          className={`${
            page === currentPage
              ? "active bg-green-600 text cursor-pointer"
              : ""
          } border border-gray-300 tablet:px-4 mobile:px-2 tablet:py-1 hover:border-green-600`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handleNextPage}
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
