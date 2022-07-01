import React, {useEffect, useState} from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'
import { base_api } from './services/api'

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome Completo',
        accessor: 'name',
      },
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  )

  const [data, setData] = useState(null)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  

  const updateMyData = (rowIndex, columnId, value) => {

    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  useEffect(() => {
    async function getDados(){
      await base_api.get('/').then((response) => {
        response.data.map((value) => {
          delete value.address
          delete value.company
          delete value.id
          delete value.phone
          delete value.website
        })
  
        setData(response.data)
      })
    }
  
    getDados()
  }, [])

  return (
    <>
    { data &&

    <div>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
    }
    </>
  )
}

export default App
