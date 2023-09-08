import axios from 'axios';
import {  DiaryEntry } from "../types";

import { dataUrl } from '../constants';



export const getAllEntries = () => {
  return axios
    .get<DiaryEntry[]>(`${dataUrl}/diaries`)
    .then(response => response.data)
}

