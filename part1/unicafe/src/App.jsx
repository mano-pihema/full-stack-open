import { useState } from 'react'

import Button from './Button'
import Total from './Total'
import StatLine from './StatLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const [review, setReview] = useState([
  //   { name: 'good', value: 0 },
  //   { name: 'bad', value: 0 },
  //   { name: 'neutral', value: 0 },
  // ])

  function handleClickgood() {
    const update = good + 1
    setGood(update)
  }
  function handleClickbad() {
    const update = bad + 1
    setBad(update)
  }
  function handleClicknew() {
    const update = neutral + 1
    setNeutral(update)
  }

  return (
    <div>
      <Button handler={handleClickgood} name="good" />
      <Button handler={handleClickbad} name="bad" />
      <Button handler={handleClicknew} name="neutral" />

      <StatLine text="good" value={good} />
      <StatLine text="neutral" value={bad} />
      <StatLine text="bad" value={neutral} />
      {good || bad || neutral ? (
        <Total good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>empty</p>
      )}
    </div>
  )
}

export default App
