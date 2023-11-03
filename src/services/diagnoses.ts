import diagnosesData from '../data/diagnoses';
import { Diagnostic } from '../types';

export const getDiagnoses=():Array<Diagnostic>=>{
    return diagnosesData;
};