function Sum({ sum }) {
  const result = sum.reduce((a, v) => a + v.exercises, 0)
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}

export default Sum
