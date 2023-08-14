import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";

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
  return (
    <div className="container">
      <NoteList note={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
