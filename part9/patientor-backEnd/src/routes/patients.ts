import express from "express"
import patientServices from "../service/fetchPatients"

const router = express.Router()

router.get('/',(_req,res)=>{
  res.send(patientServices.getPatients())
})

export default router