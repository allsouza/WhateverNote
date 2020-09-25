import React from 'react';

export default function NoteInfo({note, author}){
    debugger
    return(
        <div className="note-info">
            <h1>Note Info</h1>
            <table>
            <tbody>
                 <tr>
                    <td>Title</td>
                    <td>{note.title}</td>
                </tr>
                <tr>
                    <td>Created</td>
                    <td>{formatDate(note.created_at)}</td>
                </tr>
                <tr>
                    <td>Updated</td>
                    <td>{formatDate(note.updated_at)}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{`${author.first_name} ${author.last_name}`}</td>
                </tr>
            </tbody>
               
            </table>
        </div>
    )
}

function formatDate(date){
    date = new Date(date);
    return date.toString().slice(0,21);
}