import { useState } from 'react'
import Person from './Person'

function Filter({ data }) {
  const [search, setSearcher] = useState('')

  function handleInput(event) {
    setSearcher(event.target.value)
  }

  const matches =
    search == ''
      ? []
      : data.filter((item) => item.name.toLowerCase().includes(search))

  return (
    <div>
      <div>
        search:
        <input type="text" onChange={handleInput} />
      </div>
      {matches.map((item) => {
        return <Person key={item.name} data={item} />
      })}
    </div>
  )
}

export default Filter
