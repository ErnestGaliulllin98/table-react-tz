export default function validateInfo(values) {
  let errors = {}
  // PersonID
  if (!values.id.trim()) {
    errors.id = 'ID required'
  } else if (!/[1-9]{3}/.test(values.id)) {
    errors.id = 'ID is invalid'
  }

  // FirstName
  if (!values.firstName.trim()) {
    errors.firstName = 'First Name required'
  } else if (!/^[A-Z][a-z]+/.test(values.firstName)) {
    errors.firstName = 'First Name is invalid'
  }
  // LastName
  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name required'
  } else if (!/^[A-Z][a-z]+/.test(values.lastName)) {
    errors.lastName = 'Last Name is invalid'
  }

  // Email
  if (!values.email.trim()) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  // Phone
  if (!values.phone.trim()) {
    errors.phone = 'Phone required'
  } else if (!/\([1-9]{3}\)\d{3}(\s|-)\d{4}/.test(values.phone)) {
    errors.phone = 'Phone is invalid'
  }

  // Description
  if (!values.description.trim()) {
    errors.description = 'Description required'
  }
  return errors
}
