 import {useEffect, useState} from 'react';
import { DiaryEntry } from './types';
import { getAllEntries } from './services/diaryServices';



const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  //const [newNote, setNewNote] = useState('');


  useEffect(()=>{
   
    getAllEntries().then(data=> { setEntries(data)})

  },[])

  

  // const noteCreation = (event: React.SyntheticEvent) => {
  //   event.preventDefault()
  //   const noteToAdd = {
  //     content: newNote,
  //     id: entries.length + 1
  //   }
  //   setEntries(entries.concat(noteToAdd));
  //   setNewNote('')
  // };

  return (
    <div>
      {/* <form >
        <input value={newNote} onChange={(event) => setNewNote(event.target.value)} />
        <button type='submit'>add</button>
      </form> */}
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
          </li>
        )}
      </ul>
    </div>
  )
}

export default App