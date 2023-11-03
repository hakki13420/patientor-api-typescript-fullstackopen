import express from'express';
import diagnosesRoute from './routes/diagnoses';
import patientsRoute from './routes/patients';

const app=express();
const PORT= 3001;
  
app.use(express.json());

//middleware cors
app.all('*', function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");    
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use('/ping',(_req, res)=>{
    res.status(200).json('pong');
});
app.use('/api/diagnoses', diagnosesRoute);
app.use('/api/patients', patientsRoute);

app.listen(PORT,()=>console.log(`server running on ${PORT}`));

