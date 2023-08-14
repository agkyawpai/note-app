import React from "react";
import { useState } from "react";
function AddNote(props) {
    const { handleAddNote } = props;
    const [noteText, setNoteText] = useState("");
    const [count, setCount] = useState(200);
    const handleChange = (e) => {
        const text = e.target.value;
        if(text.length<=200) {
        setNoteText(text);
        setCount(Math.max(200 - text.length, 0));
        }
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText("");
        }
        else {
            setNoteText("");
        }
    }
    return (
        <>
        <div className="note new">
            <textarea value={noteText} rows="8" cols="10" placeholder="Type to add notes..." onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{count} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
        </>
    )
}
export default AddNote;