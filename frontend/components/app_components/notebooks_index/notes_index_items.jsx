import React from 'react';
import {formatDayMonth} from '../../../util/formats_util';

export default function NotesIndexItems({indices, notes, users, expanded}){
    return(
        <>
            {indices.map(noteId => {
                const note = notes[noteId];
                return(
                    <tr key={noteId} className="note">
                        <td className="title">
                        <i className="far fa-sticky-note"></i>{note.title}
                        </td>
                        <td className="created">
                        {`${users[note.author_id].first_name} ${users[note.author_id].last_name}`}
                        </td>
                        <td className="updated">
                            {formatDayMonth(note.updated_at)}
                        </td>
                        <td className="actions">
                            {/* Note actions component */}
                        </td>
                    </tr>
                )
            })}
        </>
    )
}