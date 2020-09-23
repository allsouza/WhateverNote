import React from 'react';
import { fetchNote } from '../../../util/notes_api_util';

export default function NotesIndexItem({note, openNote}){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(note.updated_at)
    return(
        <li onClick={() => openNote(note.id)}>
            <h3>{note.title}</h3>
            <p className="body">{note.body}</p>
            <p className="date">{`${months[date.getMonth()]} ${date.getDate()}`}</p>
        </li>
    )
}