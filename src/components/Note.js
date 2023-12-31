import React from "react";
import {MdDeleteForever} from 'react-icons/md'

function Note(props) {
    const { id, text, date, handleDeleteNote } = props;
    return (
        <>
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> handleDeleteNote(id)} className="delete-icon" size='1.3rem' />
            </div>
        </div>
        </>
    )
}
export default Note;