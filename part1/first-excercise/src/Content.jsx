import Part from './Part'

function Content({ content }) {
  return (
    <div>
      {content.map((item) => {
        return <Part key={item.name} part={item} />
      })}
    </div>
  )
}

export default Content
