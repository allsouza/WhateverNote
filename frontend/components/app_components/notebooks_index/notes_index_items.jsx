import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

export default function NotesIndexItems({indices, notes, users}){
    return(
        <>
            {indices.map(noteId => {
                debugger
                const note = notes[noteId];
                return(
                    <NoteIndexItemContainer  key={noteId} note={note} users={users}/>
                )
            })}
        </>
    )
}