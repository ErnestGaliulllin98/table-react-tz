import React from 'react'
import {isCurrentPage} from './functions.pagination'
import './TablePagination.css'

const TablePagination = ({
  personPerPage,
  totalPersons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPersons / personPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className="table-pagination">
      {pageNumbers.map(number => {
        return (
          <li
            key={number}
            className={isCurrentPage(currentPage, number)}
            onClick={() => paginate(number)}>
            {number}
          </li>
        )
      })}
    </ul>
  )
}

export default TablePagination
