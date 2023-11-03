import { Gender } from "./services/enums";
import { PatientWithoutId } from "./types";

const isString=(str:unknown):str is string=>{
    return typeof str==="string";
};

const isDate=(d:unknown):boolean=>{
    return isString(d) && Boolean(Date.parse(d));
};

const validateName=(name:unknown):string=>{
    if(!name || !isString(name)) throw new Error('error, name must be string');
    return name;
};
const validateDate=(d:unknown):string=>{
    if(! isDate(d)) throw new Error('Error invalid date');
    else if(isString(d)) return d;
    throw new Error('date must to be string');
};

const validateSsn=(num:unknown):string=>{
    if(typeof num !='string') throw new Error('ssn must be string');
    const arr=num.split('-');
    if(arr.length<2) throw new Error('invalid ssn');
    if(arr[0].length<6 || arr[1].length<1) throw new Error('invalid ssn');
    return num;

};

const isGender=(gender:string):gender is Gender=>{
    return (Object.values(Gender)
        .map(el=>el.toString())
        .includes(gender)); 
};

const validateGender=(gender:unknown):Gender=>{
    if(!gender || !isString(gender) || !isGender(gender)) throw new Error('invalid gender value');
    return gender;
};


export const validateDataRequest=(obj:unknown):PatientWithoutId=>{
    if(!obj || typeof obj!=='object' ) 
        throw new Error('parameter must be object');
    if('name' in obj && 'gender' in obj && 'dateOfBirth' in obj &&
    'ssn' in obj && 'gender' in obj && "occupation" in obj){
        return {
            name:validateName(obj.name),
            dateOfBirth:validateDate(obj.dateOfBirth),
            ssn:validateSsn(obj.ssn),
            gender:validateGender(obj.gender),
            occupation:validateName(obj.occupation)

        };
    }
    throw new Error('error, some fields are missing');
};