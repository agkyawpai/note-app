import React from "react";
import { useState } from "react";
function AddNote(props) {
    const { handleAddNote } = props;
    const [noteText, setNoteText] = useState("");
    const handleChange = (e) => {
        setNoteText(e.target.value);
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
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
        </>
    )
}
export default AddNote;