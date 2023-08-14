import React from "react";
import {MdDeleteForever} from 'react-icons/md'

function Note() {
    return (
        <>
        <div className="note">
            <span>Hello World!</span>
            <div className="note-footer">
                <small>14/08/2023</small>
                <MdDeleteForever className="delete-icon" size='1.3rem' />
            </div>
        </div>
        </>
    )
}
export default Note;