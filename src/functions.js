export const indexOfinStr = (value = '', searchVal = '') =>
  typeof value === 'string'
    ? value.toLocaleLowerCase().indexOf(searchVal.toLocaleLowerCase())
    : value
        .toString()
        .toLocaleLowerCase()
        .indexOf(searchVal.toLocaleLowerCase())

export const filterFunction = (person, inputValue) => {
  const {id, firstName, lastName, email, phone} = person
  if (
    indexOfinStr(id, inputValue) !== -1 ||
    indexOfinStr(firstName, inputValue) !== -1 ||
    indexOfinStr(lastName, inputValue) !== -1 ||
    indexOfinStr(email, inputValue) !== -1 ||
    indexOfinStr(phone, inputValue) !== -1
  ) {
    return true
  }
}
