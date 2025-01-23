import { ChevronsLeft, ChevronsRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    const maxPageNumbersToShow = 6;
    const rangeStart = Math.max(
        currentPage - Math.floor(maxPageNumbersToShow / 2),
        1
    );
    const rangeEnd = Math.min(
        rangeStart + maxPageNumbersToShow - 1,
        totalPages
    );

    for (let i = rangeStart; i <= rangeEnd; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="w-full flex flex-wrap justify-end gap-2 mt-4">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 bg-gray-300 text-gray-600 rounded-md disabled:bg-gray-100 sm:px-3 sm:py-2"
                >
                    <ChevronsLeft />
                </button>

                {currentPage > maxPageNumbersToShow && (
                    <>
                        <button
                            onClick={() => onPageChange(1)}
                            className="px-5 py-2 bg-gray-200 rounded-md sm:px-3 sm:py-1"
                        >
                            1
                        </button>
                        <span className="p-2">...</span>
                    </>
                )}

                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={`px-5 py-2 ${
                            currentPage === pageNumber
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200"
                        } rounded-md sm:px-3 sm:py-1`}
                    >
                        {pageNumber}
                    </button>
                ))}

                {currentPage < totalPages - maxPageNumbersToShow && (
                    <>
                        <span className="p-2">...</span>
                        <button
                            onClick={() => onPageChange(totalPages)}
                            className="px-5 py-2 bg-gray-200 rounded-md sm:px-3 sm:py-1"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-gray-300 text-gray-600 rounded-md disabled:bg-gray-100 sm:px-3 sm:py-2"
                >
                    <ChevronsRight />
                </button>
            </div>
        </>
    );
};

export default Pagination;
