import React from 'react'

import './TableSearch.css'

const TableSearch = ({onSearchChange, addShow}) => {
  let style = 'TableSearch'
  if (addShow) style += ' SearchStyleTwo'

  return (
    <input placeholder="Search" className={style} onChange={onSearchChange} />
  )
}

export default TableSearch
