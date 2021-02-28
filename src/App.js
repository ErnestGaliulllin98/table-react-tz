import {React, useEffect, useState} from 'react'
import ChoiceDate from './component/ChoiceDate/ChoiceDate'
import TableList from './component/TableList/TableList'
import TableAddItem from './component/TableAddItem/TableAddItem'
import TableSearch from './component/TableSearch/TableSearch'
import TablePagination from './component/TablePagination/TablePagination'
import {URL} from './component/ChoiceDate/url'
import './App.css'

// const checkUrl = (event) => event.target.value === 'Small' ? URL.smallDataBase : URL.largeDataBase

function App() {
  const [data, setData] = useState([
    {
      id: 102,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
    },
    {
      id: 103,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
    },
  ])
  const [type, setType] = useState()

  useEffect(() => {
    fetch(type)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const onChoice = event =>
    setType(
      event.target.value === 'Small' ? URL.smallDataBase : URL.largeDataBase
    )
  // Watching video fivtine вопросов react developer
  return (
    <div className="App">
      <ChoiceDate onChoice={onChoice} />
      <TableAddItem data={data} />
      <TableSearch />
      <TableList data={data} />
      <TablePagination />
    </div>
  )
}

export default App
