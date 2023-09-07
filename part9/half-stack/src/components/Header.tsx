import React from 'react'
interface headerProps {
  data:string
}

const Header = (props:headerProps) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}

export default Header