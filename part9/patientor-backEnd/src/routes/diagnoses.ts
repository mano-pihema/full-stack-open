import express from 'express';

import diagnoseServices from '../service/fetchDiagnoses'

const router = express.Router();

router.get('/',(_req,res)=>{
  res.send(diagnoseServices.getDiags());
})

export default router;

