import React from 'react';

export default function NotesIndexItem({note}){
    return(
        <li>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>{note.updated_at}</p>
        </li>
    )
}