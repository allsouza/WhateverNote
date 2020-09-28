import React from 'react';
import NoteIndexItem from './notes_index_item';
import EditorContainer from '../editor/editor_container';
import {sortByLastUptade} from './notes_index_container';

export default class NotesIndex extends React.Component{
    constructor(props){
        super(props);
        this.openNote = this.openNote.bind(this);
        this.state = {editor: false}
    }

    componentDidMount(){
        // debugger
        if(this.props.title === "All Notes"){
            this.props.fetchNotes().then((payload)=>{
                const notes = payload.notes.sort(sortByLastUptade);
                this.props.history.push(`/app/notes/${notes[0].id}`);
                document.getElementsByClassName('note-item')[0].classList.add('selected');
                this.setState({editor: true})
                }
            )
        }
        else{
            this.props.fetchNotebook(this.props.match.params.notebook_id).then(() => {
                this.props.history.push(`/app/notebooks/${this.props.notebook.id}/notes/${this.props.notes[0].id}`);
                document.getElementsByClassName('note-item')[0].classList.add('selected');
                this.setState({editor: true})
            })
        }
    }

    // Select first note if it has just been created
    componentDidUpdate(prevProps){
        // debugger
        if(this.props.notes.length > 0){
            const time = new Date(this.props.notes[0].created_at);
            if((new Date()-time) < 1000 && prevProps.location.pathname === this.props.location.pathname){
                const items = document.getElementById('note-list').childNodes;
                items.forEach(item=>{
                    item.classList.remove('selected');
                })
                items[0].classList.add('selected');
            }
        }
    }

    openNote(e, id){
        this.props.history.push(`${this.props.match.url}/${id}`)
        e.currentTarget.parentElement.childNodes.forEach(li=>{
            li.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected');
    }

    render(){
        const path = this.props.location.pathname.split('/');
        const id = path[path.length-1];
        // debugger
        return(
            <div className="main-app">
                <div className="notes-index">
                    <div className="header">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.notes.length} notes</p>
                    </div>
                    
                    <ul id="note-list">{this.props.notes.map(note=><NoteIndexItem key={note.id} openNote={this.openNote} note={note}/>)}</ul>
                </div>
                {this.state.editor ? <EditorContainer id={id} notes={this.props.notes}/> : null}
            </div>
           
            )
    }
}