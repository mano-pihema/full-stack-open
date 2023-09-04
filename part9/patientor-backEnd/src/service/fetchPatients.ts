import data from '../../data/patients'
import { v1 as uuid } from 'uuid'

import { SensitivePatient,NewPatient,Patient } from '../types'

const getPatients = ():SensitivePatient[]=>{
  return data.map(({id,name,dateOfBirth,gender,occupation})=>(
    {id,name,dateOfBirth,gender,occupation}
  ))
}

const addPatient = (patient:NewPatient):Patient =>{
  const id = uuid()
  const newPatientEntry = {
    ...patient, id:id 
  }
  data.push(newPatientEntry)
  return newPatientEntry
}

export default {getPatients,addPatient}