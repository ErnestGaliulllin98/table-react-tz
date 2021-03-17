export const isCurrentPage = (currentPage, number) =>
  currentPage === number
    ? 'table-pagination__item active'
    : 'table-pagination__item'
