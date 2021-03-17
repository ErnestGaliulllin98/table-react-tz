import React from 'react'
import './TableSearch.css'

const TableSearch = ({inputSearch}) => {
  return (
    <input
      className="table__search"
      placeholder="Search"
      {...inputSearch.bind}
    />
  )
}

export default TableSearch
