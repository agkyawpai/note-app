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
  return (
    <div className="container">
      <NoteList note={notes} />
    </div>
  );
}

export default App;
