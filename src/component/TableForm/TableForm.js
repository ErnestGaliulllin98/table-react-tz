import React from 'react'
import {useToggle} from '../../customHooks'
import {useForm} from './useForm'
import validate from './validateInfo'
import {checkErrors, checkValues} from './utils'
import './TableForm.css'

export default function TableForm({onCreate}) {
  const [isActive, toggleIsActive] = useToggle()
  const {values, handleChange, errors, handleSubmit} = useForm(
    validate,
    onCreate
  )
  // if (checkErrors(errors)) {
  //   onCreate(values)
  // }
  // console.log('checkErrors(errors)', checkErrors(errors))
  const styleTableAdd = isActive ? 'table-form active' : 'table-form'
  return (
    <>
      <input
        className="table-form__button"
        type="button"
        value="Add"
        onClick={toggleIsActive}
      />
      <div className={styleTableAdd}>
        <form className="table-form__block" onSubmit={handleSubmit}>
          <div className="table-form__block--first">
            <div className="table-form__block--first__input">
              <label>ID</label>
              <input
                className="table-form__input id"
                id="id"
                type="number"
                name="id"
                placeholder="Id"
                value={values.personId}
                onChange={handleChange}
              />
              {errors.personID && <p>{errors.personID}</p>}
            </div>
            <div className="table-form__block--first__input">
              <label>FIRST NAME</label>
              <input
                className="table-form__input firstname"
                id="firstname"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="table-form__block--first__input">
              <label>LAST NAME</label>
              <input
                className="table-form__input lastname"
                id="lastname"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="table-form__block--first__input">
              <label>EMAIL</label>
              <input
                className="table-form__input email"
                id="email"
                type="text"
                name="email"
                placeholder="example@email.com"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="table-form__block--first__input">
              <label>PHONE</label>
              <input
                className="table-form__input phone"
                id="phone"
                type="text"
                name="phone"
                placeholder="(XXX)XXX-XXXX"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
          </div>
          <div className="table-form__block--second">
            <label className="table-form__block--second__title">
              DESCRIPTION
            </label>
            <textarea
              className="table-form__textarea"
              placeholder="Description"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}></textarea>
            {errors.description && <p>{errors.description}</p>}
            <button
              className="table-form__input__block--second__button"
              type="submit"
              disabled={checkValues(values)}>
              Add to table
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </>
  )
}
