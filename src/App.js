import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is AKP",
      date: "14/08/2023",
    },
    {
      id: nanoid(),
      text: "This is AKP",
      date: "14/08/2023",
    },
    {
      id: nanoid(),
      text: "This is AKP",
      date: "14/08/2023",
    },
    {
      id: nanoid(),
      text: "This is AKP",
      date: "14/08/2023",
    },
    {
      id: nanoid(),
      text: "This is AKP",
      date: "14/08/2023",
    }
  ]);
  const [searchNote, setSearchNote] = useState("");
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const todayDate = `${date}/${month}/${year}`;

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
