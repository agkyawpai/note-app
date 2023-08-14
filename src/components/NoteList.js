import React from "react";
import Note from "./Note";

function NoteList(props) {
    const { note } = props;
    return (
        <>
        <div className="note-list">
            {note.map((note)=>(
                <Note id={note.id} text={note.text} date={note.date} />
            ))}
        </div>
        </>
    )
}
export default NoteList;