import React, {useState} from 'react'
import './TableHeader.css'

const TableHeader = ({onSort, sort, sortField}) => {
  const useClick = (initialValue = '') => {
    const [value] = useState(initialValue)
    const onClick = event => onSort(event.target.value)
    return {
      value,
      onClick,
    }
  }

  const buttonID = useClick('id')
  const buttonFirstName = useClick('firstName')
  const buttonLastName = useClick('lastName')
  const buttonEmail = useClick('email')
  const buttonPhone = useClick('phone')

  const arrow =
    sort === 'asc' ? (
      <i className="fas fa-arrow-up"></i>
    ) : (
      <i className="fas fa-arrow-down"></i>
    )

  return (
    <div className="table-header">
      <div className="header__btn id">
        <input {...buttonID} type="button" />
        {sortField === 'id' ? arrow : null}
      </div>
      <div className="header__btn firtsname">
        <input
          {...buttonFirstName}
          className="header__btn first-name"
          type="button"
        />
        {sortField === 'firstName' ? arrow : null}
      </div>
      {/* <button {...buttonLastName} className="header__btn last-name">
        LAST NAME {sortField === 'lastName' ? arrow : null}
      </button>
      <button {...buttonEmail} className="header__btn email">
        EMAIL {sortField === 'email' ? arrow : null}
      </button>
      <button {...buttonPhone} className="header__btn phone">
        PHONE {sortField === 'phone' ? arrow : null}
      </button> */}
    </div>
  )
}

export default TableHeader
