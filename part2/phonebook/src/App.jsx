import { useState, useEffect } from 'react'

import Person from './Person'
import Filter from './Filter'
import Form from './Form'

import routes from './services/routes'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: 1234567 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  useEffect(() => {
    routes.getPersons().then((result) => {
      setPersons(result)
    })
  }, [])

  function handleInput(event) {
    setNewName(event.target.value)
  }
  function handleInputNumber(event) {
    setNewNumber(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const match = persons.find((person) => person.name === newName)
    match
      ? (alert(`${newName} is already added`), setNewName(''))
      : routes.addPerson({ name: newName, number: newNumber }).then((res) => {
          setPersons(persons.concat(res))
          setNewName('')
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter data={persons} />
      <Form
        newName={newName}
        newNumber={newNumber}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleInputNumber={handleInputNumber}
      />
      <h2>Numbers</h2>
      {persons.map((item) => {
        return (
          <Person
            key={item.name}
            data={item}
            state={persons}
            setState={setPersons}
          />
        )
      })}
      ...
    </div>
  )
}

export default App
