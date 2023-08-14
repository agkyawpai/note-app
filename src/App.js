import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const todayDate = `${date}/${month}/${year}`;

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'react-notes-data',
      JSON.stringify(notes)
    )
  },[notes])

  const addNote = (text) => {
    setNotes(
      [
        ...notes,
        {
          id: nanoid(),
          text,
          date: todayDate
        }
      ]
    )
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note)=>note.id!=id))
  }
  return (
    <div className="container">
      <Search handleSearchNote={setSearchNote} />
      <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
