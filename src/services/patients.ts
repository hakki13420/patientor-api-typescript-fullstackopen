import { PatienWithoutSsn, Patient, PatientWithoutId } from '../types';
import patients  from '../data/patients';
import { v1 as uuid } from 'uuid';


export const getPatients=():Array<PatienWithoutSsn>=>{
    const patientsData=patients as Array<Patient>;
    return patientsData.map(
        ({id, name,dateOfBirth, gender, occupation})=>{
            return {
                id,
                name,
                dateOfBirth,
                gender,
                occupation
            };
        }
    );
};

export const addPatient=(obj:PatientWithoutId):Patient=>{
    return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        id : uuid(),
        name:obj.name,
        dateOfBirth:obj.dateOfBirth,
        ssn:obj.ssn,
        gender:obj.gender,
        occupation:obj.occupation
    };
};