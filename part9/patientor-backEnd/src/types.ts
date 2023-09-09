export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}


export type SensitivePatient = Omit<Patient,'ssn'>

export type NewPatient = Omit<Patient, 'id'| 'entries'>


export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;

  entries: Entry[]
}


export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;