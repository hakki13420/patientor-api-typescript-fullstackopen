import express from 'express';
import { getDiagnoses } from '../services/diagnoses';

const router=express.Router();

router.get('/',(_req, res)=>{
    res.status(200).json(getDiagnoses());
});

export default router;