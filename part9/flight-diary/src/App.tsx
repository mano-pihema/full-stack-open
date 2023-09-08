 import React, {useEffect, useState,ChangeEvent} from 'react';
import { DiaryEntry, NewEntry,Weather,Visibility } from './types';
import { addEntries, getAllEntries } from './services/diaryServices';



const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  const [form, setForm] = useState<NewEntry>({date:'', weather:Weather.cloudy, visibility:Visibility.good,comment:'' });


  useEffect(()=>{
   
    getAllEntries().then(data=> { setEntries(data)})

  },[])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const{name,value} = event.target

      setForm({
      ...form,
      [name]: value,
    });
    

  };


  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    const itemToAdd = {
      id:entries.length+1, ...form ,
    }

    addEntries(itemToAdd).then(()=>{
      setEntries([...entries,itemToAdd])
    })
   


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input id = 'date' name = 'date'  type = 'date'onChange={handleInputChange}/>

    <fieldset>
      <legend>Select visibility</legend>
      {
        Object.keys(Visibility).map((item,i)=>(
        <div key = {i}>
          <input type="radio" id={item} name="visibility" value={item} onChange={handleInputChange} />
          <label htmlFor={item}>{item}</label>
        </div>
        ))
      }

    </fieldset>

    <fieldset>
      <legend>Select weather</legend>
      {
        Object.keys(Weather).map((item,i)=>(
        <div key = {i}>
          <input type="radio" id={item} name="weather" value={item} onChange={handleInputChange} />
          <label htmlFor={item}>{item}</label>
        </div>
        ))
      }

    </fieldset>


    <input type="text" name = "comment" onChange={handleInputChange}/>

        <button type='submit'>add</button>
      </form>
      <ul>
        {entries.map(note =>
          <li key={note.id}>
            <h2>
              {note.date}
            </h2>
            <p>
              {note.visibility}
            </p>
            <p>
              {note.weather}
            </p>
            <p>
              {note.comment}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App

