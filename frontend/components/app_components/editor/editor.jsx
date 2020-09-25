import React from 'react';
import Header from './header';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state= Object.assign({}, this.props.note,{
            noteIds: props.noteIds
        })

        // Bindings
        this.selectTextarea = this.selectTextarea.bind(this);
        this.leaveTextarea = this.leaveTextarea.bind(this);
        this.autoSave = this.autoSave.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    componentDidUpdate(prevProps, prevState){
        
        if(prevProps.location.pathname !== this.props.location.pathname){
            Object.keys(this.props.note).forEach(key=>{
                this.setState({[key]:this.props.note[key]})
            })
            this.setState({noteIds: this.props.noteIds})
        }
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    toolbarToggle(){
        const eles = document.getElementById('toolbar-field').childNodes;
        eles.forEach(ele=>{
            ele.classList.toggle('active');
        })
    }

    autoSave(){
        if(this.state.title === ''){
            this.setState({title: "Untitled"})
        }
        this.props.updateNote(this.state)
    }

    selectTextarea(){
        this.toolbarToggle();
        this.saving = setInterval(this.autoSave, 30000);
    }

    leaveTextarea(){
        this.toolbarToggle();
        clearInterval(this.saving)
        this.autoSave();
    }

    deleteNote(){
        const remId = this.state.noteIds.indexOf(this.state.id);
        this.state.noteIds.splice(remId, 1)
        this.props.history.push(`/app/notes/${this.state.noteIds[0]}`);
        this.props.deleteNote(this.state.id)
    }

    render(){
        return(
            <div className="editor">
                <Header deleteNote={this.deleteNote}/>
                <form>
                    <input id="title" type="text" 
                            onChange={this.handleChange('title')} 
                            onBlur={this.autoSave}
                            value={this.state.title === "Untitled" ? "" : this.state.title} 
                            placeholder="Title"/>
                    
                    <textarea  id="body" value={this.state.body}
                                onFocus={this.selectTextarea} 
                                onBlur={this.leaveTextarea}
                                onChange={this.handleChange('body')}
                                placeholder="Start writing your note"
                    ></textarea>
                </form>
            </div>
        )
    }
}