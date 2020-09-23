import React from 'react';
import NoteIndexItem from './notes_index_item';

export default class NotesIndex extends React.Component{
    componentDidMount(){
        this.props.fetchNotes();
    }

    render(){
        // debugger
        return(
            <div className="notes-index">
                <h1>All Notes</h1>
                <ul>{this.props.notes.map(note=><NoteIndexItem key={note.id} note={note}/>)}</ul>
            </div>
            )
    }
}