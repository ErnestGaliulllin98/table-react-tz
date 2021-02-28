import React, {useState} from 'react'
import {changeBoolean, useActive} from '../../customHooks'
import './TableAddItem.css'

function TableAddItem({data}) {
  const [form, setForm] = useState(false)
  const tableAddItemStyle = useActive(form, 'table-add-item')
  const onChange = () => setForm(changeBoolean)
  return (
    <>
      <input
        className="table-add-item__button"
        type="button"
        value="Add"
        onClick={onChange}
      />
      <div className={tableAddItemStyle}>
        <form className="table-add-item__block">
          <div className="table-add-item__block--first">
            <div>
              <p>id</p>
              <input className="table-add-item__input id" placeholder="Ввод" />
            </div>
            <div>
              <p>firstname</p>
              <input
                className="table-add-item__input firstname"
                placeholder="Ввод"
              />
            </div>
            <div>
              <p>lastname</p>
              <input
                className="table-add-item__input lastname"
                placeholder="Ввод"
              />
            </div>
            <div>
              <p>email</p>
              <input
                className="table-add-item__input email"
                placeholder="Ввод"
              />
            </div>
            <div>
              <p>phone</p>
              <input
                className="table-add-item__input phone"
                placeholder="Ввод"
              />
            </div>
          </div>
          <div className="table-add-item__block--second">
            <p className="table-add-item__block--second__title">description</p>
            <textarea
              className="table-add-item__textarea"
              placeholder="Ввод"></textarea>
            <input
              className="table-add-item__input__block--second__button"
              type="button"
              value="Add to table"
              disabled
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default TableAddItem
