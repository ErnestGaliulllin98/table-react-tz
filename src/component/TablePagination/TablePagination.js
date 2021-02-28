import React, {useState} from 'react'
import {changeBoolean, useActive} from '../../customHooks'

import './TablePagination.css'

const TablePagination = () => {
  const [type, setType] = useState(false)
  const tablePaginationStyle = useActive(type, 'table-pagination__item')
  const onChange = () => setType(changeBoolean)
  return (
    <ul className="table-pagination">
      <li className={tablePaginationStyle} onClick={onChange}>
        0
      </li>
      <li className="table-pagination__item" onClick={onChange}>
        1
      </li>
      <li className="table-pagination__item" onClick={onChange}>
        2
      </li>
    </ul>
  )
}

export default TablePagination
