import express from 'express';
import { addPatient, getPatients } from '../services/patients';
import { PatientWithoutId } from '../types';
import patients from '../data/patients';
import { validateDataRequest } from '../utils';

const router=express.Router();

router.get('/',(_req, res)=>{
    res.status(200).json(getPatients());
});

router.post('/', (req, res)=>{
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {name, dateOfBirth, ssn, gender, occupation}:PatientWithoutId=req.body;
        const validatePatient=validateDataRequest({name, dateOfBirth, ssn, gender, occupation});
        const newPatient=addPatient(validatePatient);
        patients.push(newPatient);
        return res.status(201).json(newPatient);
    } catch (error) {
        if(error instanceof Error)
            return res.status(400).json(error.message);
    }
    return;
});

export default router;