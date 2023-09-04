import Header from './Header'
import Content from './Content'
import Sum from './Sum'

const Course = ({ course }) => {
  return (
    <div>
      <div>
        <Header name={course[0].name} />
        <ul>
          {course[0].parts.map((item) => {
            return <Content key={item.name} content={item} />
          })}
        </ul>
        <Sum sum={course[0].parts} />
      </div>
      <div>
        <Header name={course[1].name} />
        <ul>
          {course[1].parts.map((item) => {
            return <Content key={item.name} content={item} />
          })}
        </ul>
        <Sum sum={course[1].parts} />
      </div>
    </div>
  )
}

export default Course
