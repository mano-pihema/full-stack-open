import data from "../../data/diagnoses";

import { Diagnoses } from "../types";


const getDiags = ():Diagnoses[]=>{
  return data
}

export default {getDiags}