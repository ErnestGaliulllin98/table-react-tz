import React, {useState} from 'react'
import {changeBoolean, useActive} from '../../customHooks'
import './TableItem.css'

function TableItem({person}) {
  const [type, setType] = useState(false)

  const personDataStyle = useActive(type, 'person__data')
  const personAddressStyle = useActive(type, 'person__address')

  const onChange = () => setType(changeBoolean)

  return (
    <div className="table-list__item">
      <div className={personDataStyle} onClick={onChange}>
        <div className="person__data__item">{person.id}</div>
        <div className="person__data__item">{person.firstName}</div>
        <div className="person__data__item">{person.lastName}</div>
        <div className="person__data__item">{person.email}</div>
        <div className="person__data__item">{person.phone}</div>
      </div>
      <div className={personAddressStyle}>
        Выбран пользователь
        <b>
          {person.firstName} {person.lastName}
        </b>
        <br />
        Описание: {person.description}
        <br />
        Адрес проживания: <b>{person.address.streetAddress}</b>
        <br />
        Город: <b>{person.address.city}</b>
        <br />
        Провинция/штат: <b>{person.address.state}</b>
        <br />
        Индекс: <b>{person.address.zip}</b>
      </div>
    </div>
  )
}

export default TableItem
