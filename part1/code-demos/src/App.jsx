import { useState } from 'react'

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])

  // const [total, setTotal] = useState(0)

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   const update = left + 1
  //   setLeft(update)

  //   setTotal(update + right)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   setRight(right + 1)

  //   setTotal(left + right)
  // }

  // return (
  //   <div>
  //     {left}
  //     <button onClick={handleLeftClick}>left</button>
  //     <button onClick={handleRightClick}>right</button>
  //     {right}
  //     <p>{allClicks.join(' ')}</p>

  //     <p>total {total}</p>
  //   </div>
  // )
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}
export default App
