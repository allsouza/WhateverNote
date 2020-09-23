import React from 'react';
import NoteIndexItem from './notes_index_item';
import EditorContainer from '../editor/editor_container';

export default class NotesIndex extends React.Component{
    constructor(props){
        super(props);
        this.openNote = this.openNote.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotes().then(payload=>{
            this.props.history.push(`/app/notes/${payload.notes[0].id}`)
            }
        )
    }

    openNote(id){
        this.props.history.push(`/app/notes/${id}`)
    }

    render(){
        const path = this.props.location.pathname.split('/');
        const id = path[path.length-1];
        return(
            <div className="main-app">
                <div className="notes-index">
                    <div className="header">
                        <h1>All Notes</h1>
                        <p>{this.props.notes.length} notes</p>
                    </div>
                    
                    <ul>{this.props.notes.map(note=><NoteIndexItem key={note.id} openNote={this.openNote} note={note}/>)}</ul>
                </div>
                <EditorContainer id={id}/>
            </div>
           
            )
    }
}