import {useState} from 'react'
import {checkErrors, checkValues} from './utils'

export const useForm = (validate, onCreate) => {
  const person = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    address: {
      streetAddress: 'confidentially',
      city: 'confidentially',
      state: 'confidentially',
      zip: 'confidentially',
    },
  }
  const [values, setValues] = useState(person)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationResult = validate(values)
    const clearValidationErrors = () => setErrors({})

    if (Object.keys(validationResult).length === 0) {
      clearValidationErrors()
      onCreate(values)
    } else {
      setErrors(validationResult)
    }
  }

  return {handleChange, values, errors, handleSubmit}
}

//  Гнев
//  Судья
//  Радиоволна
//  Линкольн для адвоката
//  Неизвестный под вопросом
//  Коды доступа кейптаун

// =========
// Тимур расплата
