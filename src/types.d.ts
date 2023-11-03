import { Gender } from "./services/enums";



export interface Diagnostic{
    code: string,
    name: string,
    latin?: string
}

export interface Patient{
    id:string
    name: string
    dateOfBirth: string
    ssn: string
    gender: Gender
    occupation: string
}

export type PatienWithoutSsn=Omit<Patient, 'ssn'>;
export type PatientWithoutId=Omit<Patient,'id'>;