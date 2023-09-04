
import { NewPatient, Gender } from "./types"


const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseText = (text: unknown): string => {
  if ( !isString(text)) {
      throw new Error('Incorrect text');
  }
  return text;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if ( !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const isGender = (param:string):param is Gender =>{
  return Object.values(Gender).map(v => v.toString()).includes(param)
}

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
      throw new Error('Incorrect or missing visibility: ' + gender);
  }
  return gender;
};





const formatPatientInput = (object:unknown):NewPatient =>{
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }
 if('name'in object && 'dateOfBirth' in object && 'ssn' in object && 'occupation' in object && 'gender' in object)
  {
      const newEntry:NewPatient = {
      name: parseText(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn:parseText(object.ssn),
      occupation:parseText(object.occupation),
      gender:parseGender(object.gender)
      
    }
    return newEntry
  }
 throw new Error('Incorrect data: some fields are missing');
}
export default formatPatientInput