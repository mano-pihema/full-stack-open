import React from 'react'

type totalProps = {
total:number
}

const Total = ({total}:totalProps) => {
  return (
    <div>
      {total}
    </div>
  )
}

export default Total