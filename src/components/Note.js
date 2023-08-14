import React from "react";
import {MdDeleteForever} from 'react-icons/md'

function Note(props) {
    const { id, text, date } = props;
    return (
        <>
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size='1.3rem' />
            </div>
        </div>
        </>
    )
}
export default Note;