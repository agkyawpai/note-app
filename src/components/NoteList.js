import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NoteList(props) {
    const { note, handleAddNote, handleDeleteNote } = props;
    return (
        <>
        <div className="note-list">
            {note.map((note)=>(
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
        </>
    )
}
export default NoteList;