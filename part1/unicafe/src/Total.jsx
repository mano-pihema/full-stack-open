function Total({ good, bad, neutral }) {
  const total = [good, bad, neutral]
  const sum = total.reduce((accum, val) => accum + val)
  const average = good - bad
  const positve = (good / sum) * 100
  return (
    <div>
      <p>total : {sum}</p>
      <p>average : {average}</p>
      <p>positive: {positve} %</p>
    </div>
  )
}

export default Total
