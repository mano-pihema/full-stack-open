import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    {
      name: 'Fundamentals of React',
      num: 10,
    },
    { name: 'Using props to pass data', num: 7 },
    {
      name: 'State of a component',
      num: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App
