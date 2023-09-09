
import express from "express"
import patientServices from "../service/fetchPatients"
import formatPatientInput from "../utils"
const router = express.Router()

router.get('/',(_req,res)=>{
  res.send(patientServices.getPatients())
})

router.get('/:id',(req,res)=>{
  res.send(patientServices.selectPatient(req.params.id))
})

router.post('/',(req,res)=>{
  try {
  const formatedPatient  =  formatPatientInput(req.body)
  const newPatient = patientServices.addPatient(formatedPatient)
  res.json(newPatient)

  } 
  catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }

})

export default router