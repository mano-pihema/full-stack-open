import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_AUTHORS, EDIT_BIRTH } from './queries'

function EditAuthor({ authors }) {
  const [name, setName] = useState('Robert Martin')
  const [birthday, setBirthday] = useState(0)

  const [changeBirth] = useMutation(EDIT_BIRTH, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const submit = (event) => {
    event.preventDefault()

    changeBirth({ variables: { name, birthday: Number(birthday) } })

    setBirthday(0)
  }
  return (
    <div>
      <h2>change number</h2>

      <form onSubmit={submit}>
        <div>
          name
          <select onChange={({ target }) => setName(target.value)}>
            {authors.map((people, i) => (
              <option key={i} value={people.name}>
                {people.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          birth year
          <input
            value={birthday}
            onChange={({ target }) => setBirthday(target.value)}
          />
        </div>
        <button type="submit">change birth year</button>
      </form>
    </div>
  )
}

export default EditAuthor
