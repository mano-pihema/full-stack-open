import React from 'react'

import Part from './Part'
import {  contentProp } from '../types'

const Content = ({courses}:contentProp) => {
  return (
    <div>
      {
       courses.map((item)=>(
        <Part key = {item.name} data = {item}/>
       ))
      }
      
    </div>
  )
}

export default Content