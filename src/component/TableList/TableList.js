import React from 'react'
import TableItem from '../TableItem/TableItem'
import './TableList.css'

const TableList = props => {
  return (
    <div className="table-list">
      {props.currentData.map(person => {
        return <TableItem person={person} key={person.id} />
      })}
    </div>
  )
}

export default TableList
