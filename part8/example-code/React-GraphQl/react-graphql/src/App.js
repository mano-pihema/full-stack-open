import { useQuery } from '@apollo/client'
import { ALL_PERSONS } from './queries'

import Persons from './Persons'

const App = () => {
  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Persons persons={result.data.allPersons} />
    </div>
  )
}

export default App
