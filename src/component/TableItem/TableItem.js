import React, {useReducer} from 'react'
import './TableItem.css'

function useToggle(initialValue = false) {
  return useReducer(state => !state, initialValue)
}

function TableItem({person}) {
  const [isActive, toggleIsActive] = useToggle()
  const stylePersonData = isActive ? 'person__data active' : 'person__data'
  const stylePersonAddress = isActive
    ? 'person__address active'
    : 'person__address'
  return (
    <div className="table-list__item">
      <div className={stylePersonData} onClick={toggleIsActive}>
        <div className="person__data__item">{person.id}</div>
        <div className="person__data__item">{person.firstName}</div>
        <div className="person__data__item">{person.lastName}</div>
        <div className="person__data__item">{person.email}</div>
        <div className="person__data__item">{person.phone}</div>
      </div>
      <div className={stylePersonAddress}>
        User selected:
        <b>
          {person.firstName} {person.lastName}
        </b>
        <br />
        Description: <em>{person.description}</em>
        <br />
        Residence address: <b>{person.address.streetAddress}</b>
        <br />
        City: <b>{person.address.city}</b>
        <br />
        Province / State: <b>{person.address.state}</b>
        <br />
        Zip: <b>{person.address.zip}</b>
      </div>
    </div>
  )
}

export default TableItem
