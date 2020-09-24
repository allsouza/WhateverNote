import React from 'react';
import NoteIndexItem from './notes_index_item';
import EditorContainer from '../editor/editor_container';
import {sortByLastUptade} from './notes_index_container';

export default class NotesIndex extends React.Component{
    constructor(props){
        super(props);
        this.openNote = this.openNote.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotes().then((payload)=>{
            const notes = payload.notes.sort(sortByLastUptade);
            this.props.history.push(`/app/notes/${notes[0].id}`);
            document.getElementsByClassName('note-item')[0].classList.add('selected');
            }
        )
    }

    openNote(e, id){
        this.props.history.push(`/app/notes/${id}`)
        e.currentTarget.parentElement.childNodes.forEach(li=>{
            li.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected');
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