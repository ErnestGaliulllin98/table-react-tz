import {React, useEffect, useState} from 'react'
import _ from 'lodash'
import ChoiceDate from './component/ChoiceDate/ChoiceDate'
import TableList from './component/TableList/TableList'
import TableSearch from './component/TableSearch/TableSearch'
import TablePagination from './component/TablePagination/TablePagination'
import TableForm from './component/TableForm/TableForm'
import TableHeader from './component/TableHeader/TableHeader'
import {useInput} from './customHooks'
import {filterFunction} from './functions'
import {URL} from './component/ChoiceDate/url'
import {messageError} from './component/ChoiceDate/messageError'
import './App.css'
import {testDataBase} from './testDataBase'

const App = () => {
  const [data, setData] = useState(testDataBase)
  const [filtredData, setFiltredData] = useState([])
  const [type, setType] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [personPerPage] = useState(10)
  const inputSearch = useInput()
  const [sortState, setSortState] = useState({
    sort: '',
    sortField: '',
  })
  // useEffect(() => {
  //   fetch(URL.smallDataBase)
  //     .then(function (response) {
  //       if (response.status !== 200)
  //         return Promise.reject(new Error(response.statusText))
  //       return Promise.resolve(response)
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //       setData(json)
  //     })
  //     .catch(e => {
  //       // alert(messageError)
  //     })
  // }, [type])

  // Change Data
  // const onChoice = event =>
  //   setType(
  //     event.target.value === 'Small' ? URL.smallDataBase : URL.largeDataBase
  //   )

  // Add person
  const addPerson = values => {
    setData(data.concat([values]))
  }

  // Sort Data
  const onSort = currentSortField => {
    const clonedData = [...data]
    const {sortField} = sortState
    const sortType = currentSortField === sortField ? 'desc' : 'asc'
    const orderData = _.orderBy(clonedData, currentSortField, sortType)
    setData(orderData)
    setSortState({sort: sortType, sortField: currentSortField})
  }

  // FilterData
  useEffect(() => {
    setFiltredData(data)
    setFiltredData(prev =>
      prev.filter(person => filterFunction(person, inputSearch.value))
    )
  }, [inputSearch.value, data])

  // CurrentData
  const indexOfLastPerson = currentPage * personPerPage
  const indexOfFirstPerson = indexOfLastPerson - personPerPage
  const currentData = filtredData.slice(indexOfFirstPerson, indexOfLastPerson)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      {/* <ChoiceDate onChoice={onChoice} /> */}
      <TableForm onCreate={addPerson} />
      {/* <TableSearch inputSearch={inputSearch} /> */}
      <TableHeader
        onSort={onSort}
        sort={sortState.sort}
        sortField={sortState.sortField}
      />
      <TableList currentData={currentData} />
      <TablePagination
        personPerPage={personPerPage}
        totalPersons={filtredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
