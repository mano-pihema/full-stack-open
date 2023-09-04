function Total({ content }) {
  const sum = content.reduce((acum, item) => acum + item.num, 0)
  return <p>Number of exercises {sum}</p>
}

export default Total
