import data from '../../data/patients'
import { v1 as uuid } from 'uuid'

import { NonSensitivePatient,NewPatient,Patient} from '../types'

const getPatients = ():NonSensitivePatient[]=>{
  return data.map(({id,name,dateOfBirth,gender,occupation})=>(
    {id,name,dateOfBirth,gender,occupation}
  ))
}

const selectPatient = (patient:string):Patient|undefined=>{
  return data.find((item)=>item.id === patient)
}

const addPatient = (patient:NewPatient):Patient =>{
  const id = uuid()
  const newPatientEntry = {
    ...patient, id:id ,entries:[]
  }
  data.push(newPatientEntry)
  return newPatientEntry
}

export default {getPatients,addPatient,selectPatient}