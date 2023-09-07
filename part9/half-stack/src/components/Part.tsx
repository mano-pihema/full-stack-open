import React from 'react'
import { partsProp } from '../types'

const Part = ({data}:partsProp) => {  

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};


  switch (data.kind) {
    case "basic":
      return(
        <div> 
        <p>{data.name}</p>
        <p>{data.exerciseCount}</p>
        <p>{data.description}</p>
        </div>
      )
    case "group":
      return(
        <div>
          <p>{data.name}{data.exerciseCount}</p>
          <p>{data.exerciseCount}</p>
          <p>{data.groupProjectCount}</p>
        </div>
        
      )
    case "background":
      return(
        <div>
          <p>{data.name}</p>
          <p>{data.exerciseCount}</p>
          <p>{data.description}</p>
          <p>{data.backgroundMaterial}</p>
        </div>
        
      )
      case "special":
        return(
          <div> 
          <p>{data.name}</p>
          <p>{data.exerciseCount}</p>
          <p>{data.description}</p>
          <span>{data.requirements.map((item,i)=>(
            <p key = {i}>{item}</p>
          ))}</span>
          </div>
        )
  
    default:
      return assertNever(data)
     
  }

}

export default Part