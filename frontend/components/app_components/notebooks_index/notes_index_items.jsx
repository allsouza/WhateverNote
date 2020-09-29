import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

export default function NotesIndexItems({indices, notes}){
    return(
        <>
            {indices.map(noteId => {
                const note = notes[noteId];
                return(
                    <NoteIndexItemContainer  key={noteId} note={note} />
                )
            })}
        </>
    )
}