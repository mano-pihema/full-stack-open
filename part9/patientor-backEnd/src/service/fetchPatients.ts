import data from '../../data/patients'

import { SensitivePatient } from '../types'

const getPatients = ():SensitivePatient[]=>{
  return data.map(({id,name,dateOfBirth,gender,occupation})=>(
    {id,name,dateOfBirth,gender,occupation}
  ))
}

export default {getPatients}