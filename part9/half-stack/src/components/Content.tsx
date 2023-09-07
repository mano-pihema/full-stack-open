import React from 'react'

interface contentProps{
  name:string,
  count:number
}
const Content = ({name,count}:contentProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{count}</p>
    </div>
  )
}

export default Content