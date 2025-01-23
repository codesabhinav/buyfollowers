export const paginate = (data, currentPage = 1, itemsPerPage = 5) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = data.slice(start, end);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return {
        paginatedData,
        totalPages,
    };
};
