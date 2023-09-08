import axios from 'axios';
import {  DiaryEntry } from "../types";

import { dataUrl } from '../constants';



export const getAllEntries = () => {
  return axios
    .get<DiaryEntry[]>(`${dataUrl}/diaries`)
    .then(response => response.data)
}

export const addEntries =(object:DiaryEntry)=>{
  return axios
    .post<DiaryEntry>(`${dataUrl}/diaries`, object)
    .then(response => response.data)
    .catch ((error)=>{
      if (axios.isAxiosError(error)) {
        console.log(error.status)
        console.error(error.response);
      
      } else {
        console.error(error);
      }
    }
    )
}


