import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableItem from '../TableItem/TableItem'
import './TableList.css'

function TableList(props) {
  return (
    <div className="table-list">
      <TableHeader />
      {props.data.map(person => {
        return <TableItem person={person} key={person.id} />
      })}
    </div>
  )
}

export default TableList
