export function checkErrors(errors = {}) {
  if (
    errors.firstName ||
    errors.lastName ||
    errors.email ||
    errors.id ||
    errors.phone ||
    errors.description
  ) {
    return true
  }
  return false
}

export function checkValues(values = {}) {
  if (
    values.firstName &&
    values.lastName &&
    values.email &&
    values.id &&
    values.phone &&
    values.description
  ) {
    return false
  }
  return true
}
